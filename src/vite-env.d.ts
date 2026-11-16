/// <reference types="vite/client" />

declare const __BASE_PATH__: string;
declare const __IS_PREVIEW__: string;

interface Window {
  /** Deferred third-party tag loader (index.html): runs `load` when the tags are released. */
  __sgdDeferTag?: (load: () => void) => void;
  /** Set by scripts/prerender.mjs so no tag script is baked into the static HTML. */
  __SGD_PRERENDER__?: boolean;
}
