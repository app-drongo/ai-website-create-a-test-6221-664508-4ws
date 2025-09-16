import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hero',
  description: 'Hero - Your trusted partner',
  keywords: ['test', 'pages', 'hero', 'features', 'pricing', 'white', 'background', 'main', 'color', 'colors'],
  openGraph: {
    title: 'Hero',
    description: 'Hero - Your trusted partner',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  )
}