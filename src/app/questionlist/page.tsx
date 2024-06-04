'use client'

import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from './questionlist.module.scss'
import { useGetRecipientsList } from '@/hooks/useRecipients'
import useGetWeather from '@/hooks/useGetWeather'
import { GetRecipientsList } from '@/types/recipients'
import { useState } from 'react'
import { Pagination } from '@/components/common/Pagination/Pagination'
import Card from '@/components/common/Card/Card'
import Tags from '@/components/common/Tags/Tags'
import NoAnswer from '@/components/common/NoAnswer/NoAnswer'
import Button from '@/components/common/Button/Button'

const cx = classNames.bind(styles)

const QuestionListPage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<GetRecipientsList>()
  const [currentPage, setCurrentPage] = useState(1)
  const [showNoAnswer, setShowNoAnswer] = useState(false)
  const [selectedTag, setSelectedTag] = useState<string>('')
  const limit = 100
  const viewCount = 6
  const { data, isLoading, error } = useGetRecipientsList(limit, 0)

  useGetWeather()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error loading questions</p>
  }

  const startIndex = (currentPage - 1) * 6
  const endIndex = startIndex + viewCount

  const filteredData = data.results.filter((question: any) => {
    const tagMatch =
      selectedTag === '' || question.backgroundColor === selectedTag
    const noAnswerMatch = !showNoAnswer || question.messageCount === 0
    return tagMatch && noAnswerMatch
  })
  const paginatedData = filteredData.slice(startIndex, endIndex)

  return (
    <div className={cx('main')}>
      <h1 className={cx('title')}>당신의 지식을 뽐내보세요!</h1>

      <div className={cx('header')}>
        <div className={cx('tagsContainer')}>
          <Tags
            isAll
            onTagChange={(tag) => {
              setSelectedTag(tag)
              setCurrentPage(1)
            }}
          />
        </div>
        <NoAnswer setShowNoAnswer={setShowNoAnswer} />
      </div>
      {paginatedData.length > 0 ? (
        <>
          <ul className={cx('cardContainer')}>
            {paginatedData.map((question: GetRecipientsList) => (
              <Card
                key={question.id}
                id={question.id.toString()}
                cardTitle={question.backgroundColor}
                cardText={question.name}
                answerCount={question.messageCount}
              />
            ))}
          </ul>
          <div className={cx('paginationContainer')}>
            <Pagination
              data={filteredData}
              viewCount={viewCount}
              totalCount={filteredData.length}
              limit={limit}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </>
      ) : (
        <div className={cx('noQuestions')}>
          <p className={cx('noQuestions-text')}>아직 등록된 질문이 없어요</p>
          <Link className={cx('noQuestions-button')} href={'/'}>
            <Button text="질문 등록하러 가기" size="lg" type="button" />
          </Link>
        </div>
      )}
    </div>
  )
}

export default QuestionListPage
