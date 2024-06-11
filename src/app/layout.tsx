import type { Metadata } from 'next'
import localFont from 'next/font/local'
import classNames from 'classnames/bind'

import { Providers } from '@/app/providers'
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

import '@/styles/base/common.scss'
import styles from './layout.module.scss'

const cx = classNames.bind(styles)

export const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2'
})

export const metadata: Metadata = {
  title: 'Quick Question',
  description: '빠르게, 익명으로 함께하는 Quick Question',
  generator: 'Next.js',
  keywords: [
    '질문',
    '답변',
    '퀵 퀘스쳔',
    '문답',
    '지식 공유',
    '날씨 테마',
    'q&a 사이트',
    'qq'
  ],
  openGraph: {
    title: 'Quick Question',
    description: '빠르게, 익명으로 함께하는 Quick Question',
    url: 'https://quick-question-weather.vercel.app/',
    images: [
      {
        url: '/assets/images/opengraph-image.png'
      }
    ]
  },
  robots: {
    index: true,
    follow: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false
    }
  }
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={pretendard.className}>
        <Providers>
          <Header />
          <div className={cx('container')}>
            <main className={cx('main')}>{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
