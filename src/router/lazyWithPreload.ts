import { createElement, isValidElement, lazy as reactLazy, useState } from 'react';
import type { ComponentType } from 'react';
import { matchRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

type RouteModule = { default: ComponentType };

export type PreloadableRoute = ComponentType & { preload: () => Promise<void> };

/**
 * Drop-in for React.lazy on route components, plus a `preload()` that fetches
 * the page chunk before React renders.
 *
 * Why it exists: every page ships as prerendered HTML and the app then mounts
 * with createRoot (a client render, not hydration). With plain React.lazy the
 * first render always suspends, so React wiped the prerendered page and showed
 * the "Loading page..." spinner until the page chunk arrived — seconds on a slow
 * phone. That swap is what pushed mobile LCP late (measured 2026-11-16): the hero
 * that finally counted was the one painted after the spinner.
 *
 * Once preload() has resolved, the route renders the loaded component directly —
 * no suspension, no fallback — so main.tsx can replace the prerendered DOM with
 * the real page in a single commit.
 */
export function lazy(load: () => Promise<RouteModule>): PreloadableRoute {
  let loaded: ComponentType | undefined;
  let pending: Promise<RouteModule> | undefined;

  const loadOnce = () => {
    if (!pending) {
      pending = load().then(
        (mod) => {
          loaded = mod.default;
          return mod;
        },
        (err) => {
          pending = undefined; // let a later render retry the import
          throw err;
        },
      );
    }
    return pending;
  };

  const Suspending = reactLazy(loadOnce);

  function Route() {
    // Decided once per mount: swapping the component type on a later render
    // would unmount and remount the whole page.
    const [Page] = useState<ComponentType>(() => loaded ?? Suspending);
    return createElement(Page);
  }

  Route.preload = () => loadOnce().then(() => undefined);
  return Route;
}

/** Fetches the page chunk(s) for the route that matches `pathname`. */
export function preloadRoute(routes: RouteObject[], pathname: string, basename: string): Promise<unknown> {
  const matches = matchRoutes(routes, { pathname }, basename) ?? [];
  return Promise.all(
    matches.map(({ route }) => {
      const type = isValidElement(route.element) ? (route.element.type as Partial<PreloadableRoute>) : undefined;
      return typeof type?.preload === 'function' ? type.preload() : undefined;
    }),
  );
}
