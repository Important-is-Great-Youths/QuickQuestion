'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import classNames from 'classnames/bind'

import {
  PostRecipientsReactionsCreate,
  RecentMessages
} from '@/types/recipients'
import { useGetRecipientsRead } from '@/hooks/useRecipients'
import ReactionContent from '@/components/questionDetail/ReactionContent/ReactionContent'
import ContentLayout from '@/components/questionDetail/ContentLayout/ContentLayout'
import QuestionContent from '@/components/questionDetail/QuestionContent/QuestionContent'
import AnswerEmpty from '@/components/questionDetail/AnswerEmpty/AnswerEmpty'
import AnswerContent from '@/components/common/AnswerContent/AnswerContent'

import styles from './questiondetail.module.scss'

const cx = classNames.bind(styles)

const QuestionDetailPage = () => {
  const params = usePathname()
  const questionId = params.split('/')[2]
  const { data } = useGetRecipientsRead(questionId)

  const [userState, setUserState] = useState<'question' | 'answer'>('answer')

  useEffect(() => {
    const localStorageData = localStorage.getItem('user')

    if (localStorageData) {
      JSON.parse(localStorageData).nickname === data?.name.split('/')[0] &&
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
  const checkId = data?.topReactions.find(
    (reaction: PostRecipientsReactionsCreate) => reaction.emoji.includes('/')
  )?.emoji

  return (
    <div className={cx('container')}>
      <ReactionContent id={userId} />
      <ContentLayout text="질문">
        <QuestionContent
          id={userId}
          userStatus={userState}
          data={data}
          isChecked={checkId}
        />
      </ContentLayout>
      <ContentLayout text="답변" messageCount={messageCount}>
        {empty === 0 ? (
          <AnswerEmpty userStatus={userState} />
        ) : (
          recentMessages.map(
            ({
              id,
              profileImageURL,
              sender,
              createdAt,
              content
            }: RecentMessages) => (
              <AnswerContent
                key={id}
                answerId={String(id)}
                questionId={questionId}
                profileImage={profileImageURL}
                nickname={sender}
                date={createdAt}
                answer={content}
                checkId={checkId}
              />
            )
          )
        )}
      </ContentLayout>
    </div>
  )
}

export default QuestionDetailPage
