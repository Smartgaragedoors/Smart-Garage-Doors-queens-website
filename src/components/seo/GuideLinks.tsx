// Compact internal-link section pointing a service page at its matching blog
// guides. Exists to keep blog posts out of "Discovered – currently not indexed":
// every post needs at least one contextual link from a crawled money page.
// Same card pattern as the emergency page's "Related Services & Guides" list.

interface GuideLink {
  label: string;
  href: string;
}

interface GuideLinksProps {
  title?: string;
  links: GuideLink[];
}

export default function GuideLinks({ title = 'Helpful Guides', links }: GuideLinksProps) {
  if (links.length === 0) return null;
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex items-center justify-between min-h-[44px] px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-orange-500 text-gray-800 hover:text-orange-600 transition-colors font-medium"
            >
              {l.label}
              <i className="ri-arrow-right-line" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
