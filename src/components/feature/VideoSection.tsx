import { useState } from 'react';

interface Video {
  youtubeId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
}

function VideoFacade({ video }: { video: Video }) {
  const [activated, setActivated] = useState(false);

  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      {activated ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActivated(true)}
          aria-label={`Play video: ${video.title}`}
          className="group absolute inset-0 w-full h-full cursor-pointer overflow-hidden"
        >
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="white" className="ml-1 h-7 w-7">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
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
      name: 'Smart Garage Doors',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.smartestgaragedoors.com/smart-garage-doors-logo.webp',
      },
    },
  }));

  return (
    <section className="py-8 md:py-12 bg-white">
      {videoSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
            Watch Us <span className="text-orange-500">Work</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Real tips from our techs — so you know what good work actually looks like.
          </p>
        </div>

        {/* Single video is capped + centered via inline style: a global index.css rule
            (`div { max-width:100% }`, high specificity) overrides Tailwind max-w-* here,
            so we set it inline to keep the video supporting-sized, not full-bleed. */}
        <div
          className={`grid gap-8 ${VIDEOS.length === 1 ? 'mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}
          style={VIDEOS.length === 1 ? { maxWidth: '760px' } : undefined}
        >
          {VIDEOS.map((v) => (
            <div key={v.youtubeId} className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
              <VideoFacade video={v} />
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
