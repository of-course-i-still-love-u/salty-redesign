
import { Lexend } from 'next/font/google'
import localFont from 'next/font/local'



export const psyche = localFont({ src: './Psyche.ttf' })
export const mechsuit = localFont({ src: './Mechsuit.otf' })
export const hypik = localFont({ src: 'Hypik.otf' })

export const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})
