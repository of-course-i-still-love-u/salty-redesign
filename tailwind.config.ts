import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profile-pic': "url('/img/profile-pic.svg')",
        'profile-bg': "url('/img/profile-bg.svg')",
        'exp-bg': "url('/img/exp-bg.svg')",
        'exp-q-bg': "url('/img/queen-bg.svg')",
        'exp-jc-bg': "url('/img/jack-club-bg.svg')",
        'exp-js-bg': "url('/img/jack-spade-bg.svg')",
        'exp-k-bg': "url('/img/king-bg.svg')",
        'port-sw-bg': "url('/img/sw-bg.png')",
        'port-valo-bg': "url('/img/valorant-bg.png')",
        'port-meta-bg': "url('/img/metamask-bg.png')",
        'port-spo-bg': "url('/img/spotify-bg.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '150%': '150%',
        '16': '4rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        lexend: ['var(--font-lexend)'],

      },
      colors: {
        '5D-gray': '#858585',
      },

    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
export default config
