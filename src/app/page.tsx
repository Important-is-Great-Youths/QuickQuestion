'use client'

import { useTheme } from 'next-themes'
import classNames from 'classnames/bind'
import styles from './page.module.scss'

const cx = classNames.bind(styles)

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <div className={styles.main}>
      <div className={cx('container')}>
        <div className={cx('curation-card-list')}>
          <p>인기 질문</p>
          <div>card list</div>
        </div>
        <div>
          <p>빠르게 질문해보세요!</p>
        </div>
      </div>
    </div>
  )
}
