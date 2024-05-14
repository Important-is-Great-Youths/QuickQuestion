'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import Image from 'next/image'
import Button from '@/components/common/Button/Button'

const cx = classNames.bind(styles)

interface HeaderProps {
  page: 'main' | 'etc'
}

const Header = ({ page = 'main' }: HeaderProps) => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const buttonText = page === 'main' ? '내 질문 찾기' : '질문 보러 가기'
  return (
    <header className={cx(`header`)}>
      <div className={cx(`header-frame`)}>
        <Link href={'/'}>
          <div className={cx(`header-logo`)}>
            {mounted && (
              <Image
                fill
                src={`/assets/images/logo-${theme}-title.png`}
                alt="logo"
                sizes="100%"
              />
            )}
          </div>
        </Link>
        <div className={cx(`header-button`)}>
          <Button text={buttonText} size="md" type="button" variant="default" />
        </div>
      </div>
    </header>
  )
}

export default Header
