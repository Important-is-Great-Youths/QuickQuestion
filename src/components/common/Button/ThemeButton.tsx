'use client'

import { useTheme } from 'next-themes'
import classNames from 'classnames/bind'
import { Sun, Umbrella, Snowflake } from 'lucide-react'

import styles from './ThemeButton.module.scss'

const cx = classNames.bind(styles)

const ThemeButton = () => {
  const { setTheme } = useTheme()

  return (
    <div className={cx('button-list')}>
      <button
        className={cx('button-list-item')}
        onClick={() => setTheme('sunny')}
      >
        <Sun />
      </button>
      <button
        className={cx('button-list-item')}
        onClick={() => setTheme('rainy')}
      >
        <Umbrella />
      </button>
      <button
        className={cx('button-list-item')}
        onClick={() => setTheme('snowy')}
      >
        <Snowflake />
      </button>
    </div>
  )
}

export default ThemeButton
