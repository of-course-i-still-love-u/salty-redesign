
import './globals.css'
import { lexend } from './fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
