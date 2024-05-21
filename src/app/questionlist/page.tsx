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
import Card from '@/components/common/Card/Card'
const cx = classNames.bind(styles)

const QuestionListPage = () => {
  const modalId = crypto.randomUUID()
  const { openModal, closeModal } = useModal()
  const [selectedQuestion, setSelectedQuestion] = useState<GetRecipientsList>()
  const [currentPage, setCurrentPage] = useState(1)
  const limit = 100
  const { data, isLoading, error } = useGetRecipientsList(
    limit,
    (currentPage - 1) * limit
  )

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
  //
  return (
    <div className={cx('main')}>
      <button onClick={handleTestModal}>openmodal</button>
      <ul>
        {data.results.slice(0, 6).map(
          (
            question: any //slice 0, 6 페이지 클릭할때마다 변경
          ) => (
            <Card
              id={question.id}
              cardTitle={question.backgroundColor}
              cardText={question.name}
              answerCount={question.messageCount}
            />
          )
        )}
      </ul>

      <Pagination
        data={data.results}
        limit={limit}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default QuestionListPage
