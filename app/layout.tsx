import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { siteConfig } from '@/config/site'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from './GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  themeColor: siteConfig.themeColor,
  icons: siteConfig.icons,
  metadataBase: siteConfig.metadataBase,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh_CN">
      <body className={inter.className}>
        <Navbar />
        {children}

        {process.env.NODE_ENV === 'development' ? (
          <></>
        ) : (
          <>
            <Analytics />
            <GoogleAnalytics />
          </>
        )}
      </body>
    </html>
  )
}
