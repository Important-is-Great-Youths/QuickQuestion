import React from 'react'
import classNames from 'classnames/bind'
import styles from './FormModal.module.scss'
import Button from '@/components/common/Button/Button'
import Input from '@/components/common/Input/Input'
import Textarea from '@/components/common/Textarea/Textarea'
import { useForm } from 'react-hook-form'
import { ERROR_MESSAGE, PLACEHOLDER } from '@/constants/formMessage'
import { usePostRecipientsCreate } from '@/hooks/useRecipients'
import { GetRecipientsList } from '@/types/recipients' // GetRecipientsList 인터페이스를 가져옴

const cx = classNames.bind(styles)

interface FormModalProps {
  question: GetRecipientsList // 선택된 질문 객체
  onClose: () => void // 모달 닫기 함수
}

const FormModal: React.FC<FormModalProps> = ({ question, onClose }) => {
  const {
    mutate: postRecipientsCreate,
    status,
    error
  } = usePostRecipientsCreate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (formData: any) => {
    console.log(formData)
    // 선택된 질문 객체에 데이터 추가 또는 API 호출
    postRecipientsCreate(formData, {
      onSuccess: () => {
        console.log('Success!')
        onClose()
      },
      onError: (err) => {
        console.error('Error:', err)
      }
    })
  }

  const handleCancel = () => {
    onClose()
  }

  return (
    <div className={cx('modalWrapper')}>
      <div className={cx('question-container')}>
        <p className={cx('question-title')}>질문</p>
        <p className={cx('question')}>{question.name}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cx('questionField')}>
          <div className={cx('content-container')}>
            <label className={cx('label')}>프로필 사진</label>
            <Input type="text" {...register('profileImageURL')} />
          </div>
          <div className={cx('content-container')}>
            <label className={cx('label')}>닉네임</label>
            <Input
              size="md"
              type="text"
              {...register('sender', {
                required: true,
                minLength: 1,
                maxLength: 10,
                pattern: {
                  value: /^[A-Za-z0-9가-힣]{3,10}$/,
                  message: ERROR_MESSAGE.nickname.required
                }
              })}
              placeholder={PLACEHOLDER.nickname}
            />
            {errors.sender && (
              <p className={cx('error')}>{errors.sender.message?.toString()}</p>
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
              {...register('content', {
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
              id="content"
              placeholder={PLACEHOLDER.answer}
            />
            {errors.content && (
              <p className={cx('error')}>
                {errors.content.message?.toString()}
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
  )
}

export default FormModal
