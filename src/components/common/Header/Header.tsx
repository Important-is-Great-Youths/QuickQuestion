import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import Image from 'next/image'
import Button from '../Button/Button'

const cx = classNames.bind(styles)

interface HeaderProps {
  page: 'main' | 'etc'
}

const Header = ({ page = 'main' }: HeaderProps) => {
  const buttonText = page === 'main' ? '내 질문 찾기' : '질문 보러 가기'
  return (
    <header className={cx(`header`)}>
      <div className={cx(`header-frame`)}>
        <div className={cx(`header-logo`)}>
          <Image fill src="/assets/images/4.png" alt="logo" />
        </div>
        <div className={cx(`header-button`)}>
          <Button text={buttonText} size="md" type="button" variant="default" />
        </div>
      </div>
    </header>
  )
}

export default Header
