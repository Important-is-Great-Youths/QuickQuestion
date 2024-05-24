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
import { CircleUser } from 'lucide-react'

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

  const handleProfileImage = () => {
    alert('이미지등록')
  }

  return (
    <div className={cx('modalWrapper')}>
      <div className={cx('question-container')}>
        <p className={cx('question-title')}>질문</p>
        <p className={cx('question')}>{question.name}</p>
      </div>
      <form
        className={cx('questionFieldWrap')}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={cx('questionField')}>
          <div className={cx('content-container')}>
            <label className={cx('label')}>프로필 사진</label>
            <div onClick={handleProfileImage}>
              <CircleUser className={cx('img')} strokeWidth={0.5} />
            </div>
          </div>
          <div className={cx('content-container')}>
            <label className={cx('label')}>닉네임</label>
            <Input
              size="responsive"
              type="text"
              {...register('sender', {
                required: ERROR_MESSAGE.nickname.required,
                maxLength: {
                  value: 4,
                  message: ERROR_MESSAGE.nickname.max
                },
                pattern: {
                  value: /^[A-Za-z0-9가-힣]*$/,
                  message: ERROR_MESSAGE.nickname.letters
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
              size="responsive"
              type="password"
              {...register('password', {
                required: ERROR_MESSAGE.password.required,
                maxLength: {
                  value: 4,
                  message: ERROR_MESSAGE.password.letters
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: ERROR_MESSAGE.password.number
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
        <div className={cx('button-container')}>
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
