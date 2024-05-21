'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import classNames from 'classnames/bind'

import { useGetRecipientsRead } from '@/hooks/useRecipients'
import AnswerEmpty from '@/components/questionDetail/AnswerEmpty/AnswerEmpty'

import styles from './questiondetail.module.scss'

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

  return (
    <div className={cx('container')}>
      <AnswerEmpty userStatus={userState} />
    </div>
  )
}

export default QuestionDetailPage
