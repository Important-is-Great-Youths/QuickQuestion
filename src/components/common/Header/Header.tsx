'use client'

import { useEffect, useRef, useState } from 'react'
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
  const buttonRef = useRef<HTMLDivElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node) &&
        popupRef.current &&
        !popupRef.current.contains(e.target as Node)
      ) {
        setIsOpenPopup(false)
      }
    }

    if (isOpenPopup) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpenPopup])

  const isParams = params.includes('questionlist')

  const handleOpenPopup = () => {
    setIsOpenPopup((prev) => !prev)
  }

  return (
    <header className={cx(`header`)}>
      <div className={cx(`header-frame`)}>
        <Link href={'/'}>
          <div className={cx(`header-logo`)}>
            {mounted && theme && (
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
            <div ref={buttonRef} className={cx(`header-button`)}>
              <Button
                text="내 질문 찾기"
                size="md"
                type="button"
                variant="default"
                onClick={handleOpenPopup}
              />
            </div>
            {isOpenPopup && (
              <div className={cx('header-popup')} ref={popupRef}>
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
