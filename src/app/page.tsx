import classNames from 'classnames/bind'

import { yangjin } from '@/app/layout'

import styles from './page.module.scss'

const cx = classNames.bind(styles)

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={cx('container')}>
        <div className={cx('curation-card-list')}>
          <p>인기 질문</p>
          <div>card list</div>
        </div>
        <div>
          <p className={cx(yangjin.className)}>빠르게 질문해보세요!</p>
        </div>
      </div>
    </div>
  )
}
