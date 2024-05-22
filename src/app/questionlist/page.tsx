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
  const limit = 100 // 페이지당 보여줄 항목의 수
  const viewCount = 6
  const { data, isLoading, error } = useGetRecipientsList(limit, 0)

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
  const totalCount = data.results.length
  // Math.ceil(현재 페이지 번호 / 한 화면에 보여질 페이지 개수)
  const pageGroup = Math.ceil(currentPage / 5)
  const startIndex = (currentPage - 1) * 6
  // const startIndex = (pageGroup - 1) * 5 + 1
  const endIndex = startIndex + viewCount
  const paginatedData = data.results.slice(startIndex, endIndex)
  console.log(startIndex, endIndex, paginatedData)

  return (
    <div className={cx('main')}>
      <button onClick={handleTestModal}>openmodal</button>
      <ul>
        {paginatedData.map((question: GetRecipientsList) => (
          <Card
            id={question.id.toString()}
            cardTitle={'beige'}
            cardText={question.name}
            answerCount={question.messageCount}
          />
        ))}
      </ul>

      <Pagination
        data={data.results}
        viewCount={viewCount}
        totalCount={data.results.length}
        limit={limit}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default QuestionListPage
