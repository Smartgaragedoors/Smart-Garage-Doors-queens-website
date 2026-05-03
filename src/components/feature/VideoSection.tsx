interface Video {
  youtubeId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
}

const VIDEOS: Video[] = [
  {
    youtubeId: 'ligJoNgOpkI',
    title: 'DO NOT Install a Tsunami Strip Before Watching This',
    description: 'Most people install garage door bottom seals the wrong way. Our tech walks you through exactly what to look for — and the mistake that causes them to fail within months.',
    thumbnailUrl: 'https://img.youtube.com/vi/ligJoNgOpkI/maxresdefault.jpg',
    uploadDate: '2025-01-15',
    duration: 'PT4M30S',
  },
];

export default function VideoSection() {
  const videoSchemas = VIDEOS.map((v) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: v.title,
    description: v.description,
    thumbnailUrl: v.thumbnailUrl,
    uploadDate: v.uploadDate,
    duration: v.duration,
    embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
    url: `https://www.youtube.com/watch?v=${v.youtubeId}`,
    publisher: {
      '@type': 'Organization',
      name: 'Smartest Garage Doors',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.smartestgaragedoors.com/smart-garage-doors-logo.webp',
      },
    },
  }));

  return (
    <section className="py-16 md:py-20 bg-white">
      {videoSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
            Watch Us <span className="text-orange-500">Work</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Real tips from our techs — so you know what good work actually looks like.
          </p>
        </div>

        <div className={`grid gap-8 ${VIDEOS.length === 1 ? 'max-w-3xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {VIDEOS.map((v) => (
            <div key={v.youtubeId} className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.youtubeId}?rel=0&modestbranding=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-base mb-1.5 leading-snug">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
