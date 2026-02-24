import type { Metadata } from 'next'
import { Work_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-work-sans'
})

const dmSerif = DM_Serif_Display({ 
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif'
})

export const metadata: Metadata = {
  title: 'Portfolio — Your Name',
  description: 'Creative Developer & Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${dmSerif.variable}`}>
        {children}
      </body>
    </html>
  )
}
