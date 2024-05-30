import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './FormModal.module.scss'
import Image from 'next/image'
import Button from '@/components/common/Button/Button'
import Input from '@/components/common/Input/Input'
import Textarea from '@/components/common/Textarea/Textarea'
import { useForm } from 'react-hook-form'
import { ERROR_MESSAGE, PLACEHOLDER } from '@/constants/formMessage'
import {
  usePostRecipientsCreate,
  usePostRecipientsMessagesCreate,
  usePostProfileImageUrlCreate
} from '@/hooks/useRecipients'

import { GetRecipientsList } from '@/types/recipients'
import { Plus } from 'lucide-react'

const cx = classNames.bind(styles)

interface FormModalProps {
  id: string
  question: string // 선택된 질문 객체
  onClose: () => void // 모달 닫기 함수
}

const FormModal: React.FC<FormModalProps> = ({ id, question, onClose }) => {
  const {
    mutate: PostRecipientsMessagesCreateData,
    status,
    error
  } = usePostRecipientsMessagesCreate(id)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  const { mutate: getImageUrl, isPending: isPendingGetImageUrl } =
    usePostProfileImageUrlCreate(setValue)

  const [imgSrc, setImgSrc] = useState('')
  const noImageSelect = 'https://i.ibb.co/D7MM9NT/logo-default.png'

  const onSubmit = async (data: any) => {
    console.log(data)
    const formData = {
      relationship: '친구',
      font: 'Noto Sans',
      recipientId: id,
      sender: `${data.sender}/${data.password}`,
      content: data.content,
      profileImageURL:
        data.profileImageURL && data.profileImageURL.length > 0
          ? data.profileImageURL
          : noImageSelect
    }

    PostRecipientsMessagesCreateData(formData, {
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

  const saveProfileImage = (fileBlob: any) => {
    const fileUrl = URL.createObjectURL(fileBlob)
    setImgSrc(fileUrl)

    const imgData = new FormData()
    imgData.append('image', fileBlob)
    getImageUrl(imgData)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      saveProfileImage(e.target.files[0])
    }
  }

  return (
    <div className={cx('modalWrapper')}>
      <div className={cx('question-container')}>
        <p className={cx('question-title')}>질문</p>
        <p className={cx('question')}>{question}</p>
      </div>
      <form
        className={cx('questionFieldWrap')}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={cx('questionField')}>
          <div className={cx('content-container')}>
            <div className={cx('label')}>프로필 사진</div>
            <div>
              <label className={cx('uploadBtn')}>
                <input
                  {...register('profileImageURL')}
                  type="file"
                  accept="image/*"
                  className={cx('imgBox')}
                  onChange={handleFileChange}
                />
                {imgSrc ? (
                  <div className={cx('imgWrap')}>
                    <Image
                      src={imgSrc}
                      alt="이미지 미리보기"
                      width={60}
                      height={60}
                    />
                  </div>
                ) : (
                  <Plus className={cx('img')} />
                )}
              </label>
            </div>
          </div>
          <div className={cx('content-container')}>
            <label className={cx('label')}>닉네임</label>
            <Input
              size="responsive"
              type="text"
              {...register('sender', {
                required: {
                  value: true,
                  message: ERROR_MESSAGE.nickname.required
                },
                minLength: {
                  value: 1,
                  message: ERROR_MESSAGE.nickname.max
                },
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
                required: {
                  value: true,
                  message: ERROR_MESSAGE.password.required
                },
                minLength: {
                  value: 4,
                  message: ERROR_MESSAGE.nickname.max
                },
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
          <Button
            text="답변하기"
            size="md"
            variant="default"
            type="submit"
            isDisabled={isPendingGetImageUrl}
          />
        </div>
      </form>
    </div>
  )
}

export default FormModal
