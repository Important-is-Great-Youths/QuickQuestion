import classNames from 'classnames/bind'
import styles from './AnswerContent.module.scss'
import Image from 'next/image'
import { CheckCircle2, SquarePen, SquareX } from 'lucide-react'
import useDate from '@/hooks/useDate'

const cx = classNames.bind(styles)

const testData = {
  src: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  nickname: '김답변',
  date: new Date().toISOString(),
  answer: `병아리들은 애기때는 깃털이 아닌 솜털이에요!
        부화한지 일주일정도 지나게 되면 노란 솜털이 빠지고하얀 깃털, 갈색 깃털
        등 다양한 색의 깃털이 나오게 되는거죵.
        쉽게말해 깃털 색이 노란색에서 하얀색으로 변화하는게 아닌 그냥 솜털
        자체가 빠지면서 다른색깔인 새 깃털로 바뀐다는겁니다!`
}

interface AnswerContentProps {
  profileImage: string
  nickname: string
  date: string
  answer: string
  onEdit: () => void
  onDelete: () => void
  onCheck: () => void
}

const AnswerContent = ({
  profileImage = testData.src,
  nickname = testData.nickname,
  date = testData.date,
  onEdit,
  onDelete,
  onCheck
}: AnswerContentProps) => {
  const formattedDate = useDate(date)
  return (
    <div className={cx('answercontent')}>
      <div className={cx('answercontent-top')}>
        <div className={cx('answercontent-top-profile')}>
          <div>
            <Image
              src={profileImage}
              alt="test"
              width={28}
              height={28}
              className={cx('answercontent-top-profile-image')}
            />
            <p>{nickname}</p>
          </div>
          <p>{formattedDate}</p>
        </div>
        <div className={cx('answercontent-top-buttons')}>
          <button onClick={onEdit}>
            <SquarePen />
          </button>
          <button onClick={onDelete}>
            <SquareX />
          </button>
        </div>
      </div>
      <p className={cx('answercontent-middle')}>{testData.answer}</p>
      <div className={cx('answercontent-bottom')}>
        <button className={cx('answercontent-bottom-check')} onClick={onCheck}>
          <CheckCircle2 className={cx('answercontent-bottom-check-image')} />
          <p>채택하기</p>
        </button>
      </div>
    </div>
  )
}

export default AnswerContent
