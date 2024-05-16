import classNames from 'classnames/bind'
import styles from './Card.module.scss'
import Reaction from '../Reaction/Reaction'
import { useState } from 'react'
import { TagKey, tagList } from '../Tags/Tags'
const cx = classNames.bind(styles)

interface CardProps {
  id: string
  cardTitle: 'beige' | 'purple' | 'blue' | 'green'
  cardText: string
  answerCount: number
}

const Card = ({ id, cardTitle, cardText, answerCount }: CardProps) => {
  // cardTitle을 한글로 변환하는 함수
  const getText = cardText.split('/')[2]
  const getKoreanTitle = (title: 'beige' | 'purple' | 'blue' | 'green') => {
    switch (title) {
      case 'beige':
        return '학문'
      case 'purple':
        return '연예'
      case 'blue':
        return '게임'
      case 'green':
        return '기타'
      default:
        return ''
    }
  }

  // cardTitle을 한글로 변환
  const koreanTitle = getKoreanTitle(cardTitle)
  return (
    <div className={cx('card')}>
      <div className={cx('card-body')}>
        <h1 className={cx('card-title')}>{koreanTitle}</h1>
        <p className={cx('card-text')}>{getText}</p>
      </div>
      <div className={cx('card-footer')}>
        <Reaction id={id} isHide />
        <div className={cx('card-answer')}>답변 {answerCount}개</div>
      </div>
    </div>
  )
}
export default Card
