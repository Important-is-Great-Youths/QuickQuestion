'use client'

import classNames from 'classnames/bind'

import CurationCardList from '@/components/home/CurationCardList/CurationCardList'
import QuestionForm from '@/components/home/QuestionForm/QuestionForm'

import styles from './page.module.scss'
import FormModal from '@/components/common/FormModal/FormModal'

const cx = classNames.bind(styles)

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={cx('container')}>
        <div className={cx('curation-card-list')}>
          <p className={cx('curation-card-list-title')}>인기 질문</p>
          <CurationCardList />
        </div>
        <div>
          <p className={cx('question-title')}>빠르게 질문 해보세요!</p>
          <QuestionForm />
        </div>
        <div>
          <FormModal open={open} />
        </div>
      </div>
    </div>
  )
}

export default Home
