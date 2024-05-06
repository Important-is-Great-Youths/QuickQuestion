import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import Image from 'next/image'
import Button from '../Button/Button'

const cx = classNames.bind(styles)

interface HeaderProps {
  size: 'lg' | 'sm'
}

const Header = ({ size = 'lg' }: HeaderProps) => {
  return (
    <header className={cx(`header`, `header-size-${size}`)}>
      <div className={cx(`header-frame`, `header-frame-size-${size}`)}>
        <div className={cx(`header-logo`, `header-logo-size-${size}`)}>
          <Image fill src="/assets/images/4.png" alt="logo" />
        </div>
        <div className={cx(`header-button`, `header-button-size-${size}`)}>
          <Button
            text="질문 보러 가기"
            size="md"
            type="button"
            variant="default"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
