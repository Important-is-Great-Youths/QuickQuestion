import classNames from 'classnames/bind'
import styles from './Card.module.scss'

const cx = classNames.bind(styles)

interface CardProps {
  cardTitle: '전체' | '학문' | '연예' | '게임' | '기타'
  cardText: string
  answerCount: number
}

const Card = ({ cardTitle, cardText, answerCount }: CardProps) => {
  return (
    <div className={cx('card')}>
      <div className={cx('card-body')}>
        <h1 className={cx('card-title')}>{cardTitle}</h1>
        <p className={cx('card-text')}>{cardText}</p>
      </div>
      <div className={cx('card-footer')}>
        <div>reaction 컴포넌트 추가 예정</div>
        <div className={cx('card-answer')}>답변 {answerCount}개</div>
      </div>
    </div>
  )
}
export default Card
