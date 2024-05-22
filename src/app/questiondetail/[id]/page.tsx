'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import classNames from 'classnames/bind'

import { useGetRecipientsRead } from '@/hooks/useRecipients'
import ReactionContent from '@/components/questionDetail/ReactionContent/ReactionContent'
import ContentLayout from '@/components/questionDetail/ContentLayout/ContentLayout'
import QuestionContent from '@/components/questionDetail/QuestionContent/QuestionContent'
import AnswerEmpty from '@/components/questionDetail/AnswerEmpty/AnswerEmpty'
import AnswerContent from '@/components/common/AnswerContent/AnswerContent'

import styles from './questiondetail.module.scss'
import { RecentMessages } from '@/types/recipients'

const cx = classNames.bind(styles)

const QuestionDetailPage = () => {
  const params = usePathname()
  const id = params.split('/')[2]
  const { data } = useGetRecipientsRead(id)

  const [userState, setUserState] = useState<'question' | 'answer'>('answer')

  useEffect(() => {
    const localStorageData = localStorage.getItem('user')

    if (localStorageData) {
      JSON.parse(localStorageData).nickName === data?.name.split('/')[0] &&
        JSON.parse(localStorageData).password === data?.name.split('/')[1] &&
        setUserState('question')
    } else {
      setUserState('answer')
    }
  })

  if (!data) {
    return <div>Loading...</div>
  }

  const userId = data.id
  const messageCount = data.messageCount
  const empty = data.messageCount

  const recentMessages = data.recentMessages

  return (
    <div className={cx('container')}>
      <ReactionContent id={userId} />
      <ContentLayout text="질문">
        <QuestionContent id={userId} userStatus={userState} data={data} />
      </ContentLayout>
      <ContentLayout text="답변" messageCount={messageCount}>
        {empty === 0 ? (
          <AnswerEmpty userStatus={userState} />
        ) : (
          recentMessages.map((answer: RecentMessages) => (
            <AnswerContent
              key={answer.id}
              profileImage={answer.profileImageURL}
              nickname={answer.sender}
              date={answer.createdAt}
              answer={answer.content}
            />
          ))
        )}
      </ContentLayout>
    </div>
  )
}

export default QuestionDetailPage
