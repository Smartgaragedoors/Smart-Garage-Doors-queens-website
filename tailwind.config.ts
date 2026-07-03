import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          // Premium serif used for hero/section headlines (design system: Newsreader)
          newsreader: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
        },
        typography: {
          DEFAULT: {
            css: {
              maxWidth: 'none',
            },
          },
        },
      },
    },
    plugins: [typography],
  }