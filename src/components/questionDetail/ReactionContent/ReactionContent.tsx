import classNames from 'classnames/bind'

import styles from './ReactionContent.module.scss'
import Reaction from '@/components/common/Reaction/Reaction'
const cx = classNames.bind(styles)

interface ReactionContentProps {
  id: string
}

const ReactionContent = ({ id }: ReactionContentProps) => {
  return (
    <div className={cx('ReactionContent')}>
      <div className={cx('ReactionContent-title')}>
        질문 또는 답변에 대한 느낌을 이모지로 나타내주세요!
      </div>
      <Reaction id={id}></Reaction>
    </div>
  )
}

export default ReactionContent
