import { createContext, useContext, type ReactNode } from 'react';

interface PageMeta {
  /** Overrides the last breadcrumb segment (e.g. blog post title). */
  breadcrumbLabel?: string;
}

const PageMetaContext = createContext<PageMeta>({});

export function PageMetaProvider({ value, children }: { value: PageMeta; children: ReactNode }) {
  return <PageMetaContext.Provider value={value}>{children}</PageMetaContext.Provider>;
}

export function usePageMeta(): PageMeta {
  return useContext(PageMetaContext);
}
