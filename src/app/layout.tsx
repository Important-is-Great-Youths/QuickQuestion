import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import classNames from 'classnames/bind'

import '@/styles/base/common.scss'

import styles from './layout.module.scss'

const cx = classNames.bind(styles)

export const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2'
})

export const yangjin = localFont({
  src: './fonts/YangjinV0.9.ttf'
})

export const metadata: Metadata = {
  title: 'Quick Question',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={pretendard.className}>
        <NextThemeProvider themes={['sunny', 'rainy', 'snowy']}>
          <div className={cx('container')}>
            <main className={cx('main')}>{children}</main>
          </div>
        </NextThemeProvider>
      </body>
    </html>
  )
}
