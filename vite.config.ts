import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'

// Default to '/' for local dev, GitHub Pages uses '/Smart-Garage-Doors-queens-website/'
// Set BASE_PATH environment variable for GitHub Pages builds
const base = process.env.BASE_PATH || '/'
const isPreview = process.env.IS_PREVIEW  ? true : false;

// Conditionally load visualizer only when ANALYZE=true
let visualizerPlugin: any = null;
if (process.env.ANALYZE === 'true') {
  try {
    const { visualizer } = require('rollup-plugin-visualizer');
    visualizerPlugin = visualizer({
      open: true,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    });
  } catch (e) {
    console.warn('rollup-plugin-visualizer not found. Install it with: npm install -D rollup-plugin-visualizer');
  }
}

// https://vite.dev/config/
export default defineConfig({
  define: {
   __BASE_PATH__: JSON.stringify(base),
   __IS_PREVIEW__: JSON.stringify(isPreview)
  },
  plugins: [
    react(),
    AutoImport({
      imports: [
        {
          'react': [
            'React',
            'useState',
            'useEffect',
            'useContext',
            'useReducer',
            'useCallback',
            'useMemo',
            'useRef',
            'useImperativeHandle',
            'useLayoutEffect',
            'useDebugValue',
            'useDeferredValue',
            'useId',
            'useInsertionEffect',
            'useSyncExternalStore',
            'useTransition',
            'startTransition',
            'lazy',
            'memo',
            'forwardRef',
            'createContext',
            'createElement',
            'cloneElement',
            'isValidElement'
          ]
        },
        {
          'react-router-dom': [
            'useNavigate',
            'useLocation',
            'useParams',
            'useSearchParams',
            'Link',
            'NavLink',
            'Navigate',
            'Outlet'
          ]
        },
        // React i18n
        {
          'react-i18next': [
            'useTranslation',
            'Trans'
          ]
        }
      ],
      dts: true,
    }),
    // Bundle analyzer - only in analyze mode
    visualizerPlugin,
  ].filter(Boolean),
  base,
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    legalComments: 'none', // Remove comments for smaller bundles
  },
  build: {
    sourcemap: false, // Disable sourcemaps in production for faster builds
    outDir: 'out',
    minify: 'esbuild',
    // Enable tree-shaking
    treeshake: {
      moduleSideEffects: 'no-external',
      propertyReadSideEffects: false,
      tryCatchDeoptimization: false,
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks - more granular splitting for better caching
          if (id.includes('node_modules')) {
            // React core - most stable, rarely changes
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-core';
            }
            // React Router - stable, changes infrequently
            if (id.includes('react-router')) {
              return 'react-router';
            }
            // Supabase - separate chunk for API client
            if (id.includes('@supabase')) {
              return 'supabase-vendor';
            }
            // Stripe - separate chunk for payment processing
            if (id.includes('@stripe')) {
              return 'stripe-vendor';
            }
            // Recharts - large charting library, separate chunk
            if (id.includes('recharts')) {
              return 'recharts-vendor';
            }
            // i18n - internationalization, separate chunk
            if (id.includes('i18next') || id.includes('react-i18next') || id.includes('i18next-browser-languagedetector')) {
              return 'i18n-vendor';
            }
            // Analytics - separate chunk for tracking
            if (id.includes('@vercel/analytics') || id.includes('web-vitals')) {
              return 'analytics-vendor';
            }
            // All other node_modules - smaller vendor libraries
            return 'vendor';
          }
          // Split large page components for better code splitting
          if (id.includes('/pages/') && !id.includes('home')) {
            const match = id.match(/pages\/([^/]+)/);
            if (match) {
              return `page-${match[1]}`;
            }
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 500, // Lower limit for mobile optimization
    reportCompressedSize: true, // Report compressed sizes
    cssCodeSplit: true, // Split CSS per chunk
    target: 'es2015', // Target modern browsers for smaller bundles
    cssTarget: 'es2015', // Better CSS minification
    terserOptions: undefined, // Use esbuild minification (faster)
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  }
})
