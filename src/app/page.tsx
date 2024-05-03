'use client'

import { useTheme } from 'next-themes'
import classNames from 'classnames/bind'
import styles from './page.module.scss'

const cx = classNames.bind(styles)

export default function Home() {
  const { theme, setTheme } = useTheme()

  return <main className={styles.main}></main>
}
