import classNames from 'classnames/bind'
import Button from '@/components/common/Button/Button'
import useChangeTagName from '@/hooks/useChangeTagName'
import styles from './QuestionContent.module.scss'
import useDate from '@/hooks/useDate'
import { useGetRecipientsRead } from '@/hooks/useRecipients'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

interface QuestionContentProps {
  id?: string
}

const QuestionContent = ({ id }: QuestionContentProps) => {
  if (id === undefined) {
    return <div>Invalid ID</div>
  }
  const userId = window.localStorage.getItem('id')
  const [answerUser, setAnswerUser] = useState(true)

  useEffect(() => {
    if (userId === id) {
      setAnswerUser(false)
    }
    return () => {
      setAnswerUser(true)
    }
  }, [id])

  const { data } = useGetRecipientsRead(id)
  const getTagName = useChangeTagName()

  if (!data) {
    return <div>Loading...</div>
  }

  const tagName = getTagName(data.backgroundColor)
  const name = data.name
  const userName = name.split('/')[0]
  const questionText = name.split('/')[2]
  const date = useDate(data.createdAt)

  const handleAnswer = () => {
    console.log('답변하기')
  }

  return (
    <div className={cx('questionContent')}>
      <div className={cx('questionHeader')}>
        <i className={cx('questionHeader-icon')}>Q</i>
        <span className={cx('questionHeader-category')}>{tagName}</span>
      </div>
      <div className={cx('questionDetails')}>
        <span className={cx('questionDetails-author')}>{userName}</span>
        <span className={cx('questionDetails-date')}>{date}</span>
      </div>
      <div className={cx('questionText')}>{questionText}</div>
      {answerUser && (
        <div className={cx('questionBtn')}>
          <Button
            text="답변하기"
            size="lg"
            type="button"
            onClick={handleAnswer}
          />
        </div>
      )}
    </div>
  )
}

export default QuestionContent
