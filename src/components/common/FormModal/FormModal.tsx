import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './FormModal.module.scss'
import Button from '@/components/common/Button/Button'
import Input from '@/components/common/Input/Input'
import Textarea from '@/components/common/Textarea/Textarea'
import { useForm } from 'react-hook-form'
import { ERROR_MESSAGE, PLACEHOLDER } from '@/constants/formMessage'
import { usePostRecipientsCreate } from '@/hooks/useRecipients'

import { ERROR_MESSAGE, PLACEHOLDER } from '@/constants/formMessage'
import { usePostRecipientsCreate } from '@/hooks/useRecipients'

const cx = classNames.bind(styles)

const FormModal = ({ onClose }: any) => {
  const {
    mutate: postRecipientsCreate,
    status,
    error
  } = usePostRecipientsCreate() // usePostRecipientsCreate 훅에서 반환된 객체의 이름을 postRecipientsCreate로 변경

  let initialFormState = {
    team: '',
    recipientId: 0,
    sender: '',
    profileImageURL: '',
    relationship: '친구',
    content: '',
    font: 'Noto Sans'
  } //react-hook-form 사용해서 불러오기 state 사용 안해도 됨!

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [question, setQuestion] = useState('') //질문 내용
  const [form, setForm] = useState(initialFormState)

  const onSubmit = async (formData: any) => {
    // const { mutate } = usePostRecipientsCreate()
    const { ...initialFormState } = formData
    console.log(initialFormState)
    // mutate(initialFormState) //
  }
  const handleCancel = () => {
    onClose()
  }


  return (
    <>
      <div className={cx('modalWrapper')}>
      <div className={cx('modalWrapper')}>
        <div className={cx('question-container')}>
          <p className={cx('question-title')}>질문</p>
          <p className={cx('question')}>{question.name}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={cx('questionField')}>
            <div className={cx('content-container')}>
              <label className={cx('label')}>프로필 사진</label>
            </div>
            <div className={cx('content-container')}>
              <label className={cx('label')}>닉네임</label>
              <Input
                size="md"
                type="text"
                {...register('nickname', {
                  required: true,
                  minLength: 1,
                  maxLength: 4,
                  pattern: {
                    value: /^[A-za-z0-9가-힣]{3,10}$/,
                    message: ERROR_MESSAGE.nickname.required
                  }
                })}
                placeholder={PLACEHOLDER.nickname}
              />
              {errors.nickname && (
                <p className={cx('error')}>
                  {errors.nickname.message?.toString()}
                </p>
              )}
            </div>
            <div className={cx('content-container')}>
              <label className={cx('label')}>비밀번호</label>
              <Input
                size="md"
                type="password"
                {...register('password', {
                  required: true,
                  minLength: 4,
                  maxLength: 4,
                  pattern: {
                    value: /^[0-9]*$/,
                    message: ERROR_MESSAGE.password.required
                  }
                })}
                placeholder={PLACEHOLDER.password}
              />
              {errors.password && (
                <p className={cx('error')}>
                  {errors.password.message?.toString()}
                </p>
              )}
            </div>
            <div className={cx('content-container')}>
              <label className={cx('label')}>답변 내용</label>
              <Textarea
                {...register('answer', {
                  required: {
                    value: true,
                    message: ERROR_MESSAGE.answer.required
                  },
                  minLength: {
                    value: 5,
                    message: ERROR_MESSAGE.answer.min
                  },
                  maxLength: {
                    value: 255,
                    message: ERROR_MESSAGE.answer.max
                  }
                })}
                id="answer"
                placeholder={PLACEHOLDER.answer}
              />
              {errors.answer && (
                <p className={cx('error')}>
                  {errors.answer.message?.toString()}
                </p>
              )}
            </div>
          </div>
          <div className="button-container">
            <Button
              text="취소하기"
              size="md"
              variant="another"
              type="button"
              onClick={handleCancel}
            />
            <Button text="답변하기" size="md" variant="default" type="submit" />
          </div>
        </form>
      </div>
    </>
  )
}

export default FormModal
