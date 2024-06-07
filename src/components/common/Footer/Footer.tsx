import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames/bind'

import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer-wrap')}>
        <div className={cx('footer-wrap-information')}>
          <div className={cx('footer-wrap-information-logo')}>
            <Image
              className={cx('footer-wrap-information-logo-image')}
              src={'/assets/images/logo-default.png'}
              alt="로고 이미지"
              fill
            />
          </div>
          <div className={cx('footer-wrap-information-text')}>
            <p>빠르게, 익명으로 함께하는 Quick Question</p>
            <p>© 2024 Quick Question. All rights reserved.</p>
          </div>
        </div>
        <div className={cx('footer-wrap-about')}>
          About Project
          <Link
            target="_blank"
            href={'https://github.com/Important-is-Great-Youths/QuickQuestion'}
          >
            <Image
              src={'/assets/images/icon-github.svg'}
              alt="깃허브 아이콘"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
