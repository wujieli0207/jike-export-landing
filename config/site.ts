import { SiteConfig } from '@/types/siteConfig'

export const siteName = '即刻导出'

const baseSiteConfig = {
  name: `${siteName} - 导出即刻动态和收藏为本地文件`,
  description: `${siteName} - 导出自己和即友的动态和个人收藏为本地文件，支持 Markdown、纯文本、excel、csv 格式的文件，无缝导入 Obsidian、Heptabase 等笔记工具`,
  url: 'https://jike-export.wujieli.com',
  ogImage: 'https://jike-export.wujieli.com/og.png',
  metadataBase: new URL('https://jike-export.wujieli.com'),
  keywords: [
    siteName,
    '即刻动态导出',
    '即刻收藏导出',
    '即刻数据备份',
    '即刻动态管理',
    '即刻收藏管理',
  ],
  authors: [
    {
      name: 'wujieli',
      url: 'https://wujieli.com',
    },
  ],
  creator: '@wujieli',
  themeColor: '#fff',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  links: {
    twitter: 'https://x.com/li_wujie',
    github: 'https://github.com/wujieli0207/jike-export-extension',
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
