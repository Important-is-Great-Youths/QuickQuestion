import classNames from 'classnames/bind'

import styles from './AnswerEmpty.module.scss'
import Image from 'next/image'

const cx = classNames.bind(styles)

interface AnswerEmpty {
  userStatus: 'question' | 'answer'
}

const AnswerEmpty = ({ userStatus }: AnswerEmpty) => {
  return (
    <div className={cx('container')}>
      <Image
        className={cx('image')}
        src={`/assets/images/logo-default.png`}
        alt="미답변 이미지"
        width={100}
        height={77}
      />
      {userStatus === 'answer' ? (
        <p>당신의 지식을 공유해주세요</p>
      ) : (
        <p>답변을 기다려 주세요</p>
      )}
    </div>
  )
}

export default AnswerEmpty
