import classNames from 'classnames/bind'
import styles from './AnswerContent.module.scss'
import Image from 'next/image'
import { CheckCircle2, SquarePen, SquareX } from 'lucide-react'
import useDate from '@/hooks/useDate'
import { usePostReaction } from '@/hooks/useRecipients'
import PwPopUp from '@/components/common/PopUp/PwPopUp'
import { useState } from 'react'
import { useModal } from '@/contexts/ModalProvider'
import AlertModal from '@/components/common/AlertModal/AlertModal'
import Textarea from '@/components/common/Textarea/Textarea'
import { deleteRecipientsDelete } from '@/apis/recipients'

const cx = classNames.bind(styles)

const testData = {
  src: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  nickname: '김답변',
  date: new Date().toISOString(),
  answer: `병아리들은 애기때는 깃털이 아닌 솜털이에요! 부화한지 일주일정도 지나게 되면 노란 솜털이 빠지고하얀 깃털, 갈색 깃털 등 다양한 색의 깃털이 나오게 되는거죵. 쉽게말해 깃털 색이 노란색에서 하얀색으로 변화하는게 아닌 그냥 솜털 자체가 빠지면서 다른색깔인 새 깃털로 바뀐다는겁니다!`
}

interface AnswerContentProps {
  answerId: string
  questionId: string
  profileImage: string
  nickname: string
  date: string
  answer: string
  checkId: string
  userType: 'question' | 'answer'
  onCheck?: () => void
}

const AnswerContent = ({
  answerId,
  questionId,
  profileImage = testData.src,
  nickname = testData.nickname,
  date = testData.date,
  answer = testData.answer,
  checkId,
  userType = 'answer',
  onCheck
}: AnswerContentProps) => {
  const formattedDate = useDate(date)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [popupMode, setPopupMode] = useState('')
  const modalId = crypto.randomUUID()
  const { openModal, closeModal } = useModal()
  const [isTextareaOpen, setIsTextareaOpen] = useState(false)

  const { mutate } = usePostReaction(questionId)

  const handlePopupOpen = () => {
    setIsPopupOpen(!isPopupOpen)
  }

  const handleEditButton = () => {
    handlePopupOpen()
    setPopupMode('edit')
  }

  const handleDeleteButton = () => {
    handlePopupOpen()
    setPopupMode('delete')
  }

  const handlePopupCheck = () => {
    if (popupMode === 'edit') {
      setIsTextareaOpen(true)
      handlePopupOpen()
    } else if (popupMode === 'delete') {
      handleAlertModal()
      handlePopupOpen()
    }
  }

  const handleAlertModal = () => {
    openModal(
      <AlertModal
        onCancel={() => {
          closeModal(modalId)
        }}
        onDelete={() => {
          deleteRecipientsDelete(answerId)
          closeModal(modalId)
        }}
      />,
      modalId
    )
  }

  const handleAnswerCheck = () => {
    mutate({ emoji: `/${answerId}`, type: 'increase' })
  }

  return (
    <div
      className={cx('answercontent', {
        'answercontent-check': checkId?.replace('/', '') === answerId
      })}
    >
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
        {userType === 'answer' && (
          <div className={cx('answercontent-top-buttons')}>
            <button
              onClick={handleEditButton}
              className={cx('answercontent-top-buttons-button')}
            >
              <SquarePen />
            </button>
            <button
              onClick={handleDeleteButton}
              className={cx('answercontent-top-buttons-button')}
            >
              <SquareX />
            </button>
            {isPopupOpen && (
              <div className={cx('answercontent-top-pwpopup')}>
                <PwPopUp onCheck={() => handlePopupCheck()} />
              </div>
            )}
          </div>
        )}
      </div>
      {isTextareaOpen ? (
        <Textarea id="0" placeholder={answer} maxLength={30} />
      ) : (
        <p className={cx('answercontent-middle')}>{answer}</p>
      )}
      {userType === 'question' && (
        <div className={cx('answercontent-bottom')}>
          <button
            className={cx('answercontent-bottom-check')}
            onClick={handleAnswerCheck}
          >
            <CheckCircle2 className={cx('answercontent-bottom-check-image')} />
            <p>채택하기</p>
          </button>
        </div>
      )}
    </div>
  )
}

export default AnswerContent
