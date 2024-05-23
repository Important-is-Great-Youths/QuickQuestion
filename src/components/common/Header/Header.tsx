'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import Image from 'next/image'
import Button from '@/components/common/Button/Button'
import FindPopUp from '@/components/common/PopUp/FindPopUp'

const cx = classNames.bind(styles)

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const { theme } = useTheme()
  const params = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isParams = params.includes('questionlist')

  const handleOpenPopup = () => {
    setIsOpenPopup((prev) => !prev)
  }

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
        {isParams ? (
          <>
            <div className={cx(`header-button`)}>
              <Button
                text="내 질문 찾기"
                size="md"
                type="button"
                variant="default"
                onClick={handleOpenPopup}
              />
            </div>
            {isOpenPopup && (
              <div className={cx('header-popup')}>
                <FindPopUp />
              </div>
            )}
          </>
        ) : (
          <Link className={cx(`header-button`)} href={'/questionlist'}>
            <Button
              text="질문 보러 가기"
              size="md"
              type="button"
              variant="default"
            />
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
