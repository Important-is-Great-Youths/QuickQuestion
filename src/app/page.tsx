'use client'

import classNames from 'classnames/bind'

import QuestionForm from '@/components/home/QuestionForm/QuestionForm'

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
          <p className={cx('text')}>빠르게 질문 해보세요!</p>
          <QuestionForm />
        </div>
      </div>
    </div>
  )
}
