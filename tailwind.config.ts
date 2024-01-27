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
        'exp-king': "url('/img/king-card.svg')",
        'port-sw-bg': "url('/img/sw-bg.svg')",
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
