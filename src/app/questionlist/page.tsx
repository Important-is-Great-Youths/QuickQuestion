'use client'

import classNames from 'classnames/bind'

import styles from './questionlist.module.scss'
import { useModal } from '@/contexts/ModalProvider'
import AlertModal from '@/components/common/AlertModal/AlertModal'

const cx = classNames.bind(styles)

const QuestionListPage = () => {
  const modalId = crypto.randomUUID()
  const { openModal, closeModal } = useModal()

  const handleTestModal = () => {
    openModal(
      <AlertModal
        onCancel={() => {
          closeModal(modalId)
        }}
        onDelete={() => {
          closeModal(modalId)
        }}
      />,
      modalId
    )
  }
  return (
    <div className={cx('main')}>
      QuestionListPage
      <button onClick={handleTestModal}>openmodal</button>
    </div>
  )
}

export default QuestionListPage
