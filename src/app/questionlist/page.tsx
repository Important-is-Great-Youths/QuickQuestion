'use client'

import classNames from 'classnames/bind'

import styles from './questionlist.module.scss'
import { useModal } from '@/contexts/ModalProvider'
import AlertModal from '@/components/common/AlertModal/AlertModal'
import { useGetRecipientsList } from '@/hooks/useRecipients'
import { GetRecipientsList } from '@/types/recipients'
import { useState } from 'react'
import FormModal from '@/components/common/FormModal/FormModal'
import { Pagination } from '@/components/common/Pagination/Pagination'
const cx = classNames.bind(styles)

const QuestionListPage = () => {
  const modalId = crypto.randomUUID()
  const { openModal, closeModal } = useModal()
  const [selectedQuestion, setSelectedQuestion] = useState<GetRecipientsList>()
  const [currentPage, setCurrentPage] = useState(1)
  const limit = 6
  const { data, isLoading, error } = useGetRecipientsList(
    limit,
    (currentPage - 1) * limit
  )

  const handleQuestionClick = (data: GetRecipientsList) => {
    setSelectedQuestion(data)
    openModal(
      <FormModal question={data} onClose={() => closeModal(modalId)} />,
      modalId
    )
  }
  console.log(data)
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error loading questions</p>
  }

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
      <div
        className={cx('questionCard')}
        style={{ backgroundColor: data.backgroundColor }}
        onClick={() => handleQuestionClick(data)}
      >
        <p>{data.name}</p>
        <p>{data.reactionCount}</p>
      </div>

      <button onClick={handleTestModal}>openmodal</button>
      <Pagination
        data={data}
        limit={limit}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default QuestionListPage
