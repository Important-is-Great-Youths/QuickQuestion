import { useState } from 'react'
import Image from 'next/image'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import classNames from 'classnames/bind'
import { Plus, X } from 'lucide-react'

import { GetRecipientsList } from '@/types/recipients'
import { ERROR_MESSAGE, PLACEHOLDER } from '@/constants/formMessage'
import {
  useGetRecipientsList,
  usePostRecipientsCreate,
  usePostImageUrlCreate
} from '@/hooks/useRecipients'
import Textarea from '@/components/common/Textarea/Textarea'
import Input from '@/components/common/Input/Input'
import Tags from '@/components/common/Tags/Tags'
import Button from '@/components/common/Button/Button'

import styles from './QuestionForm.module.scss'

const cx = classNames.bind(styles)

const QuestionForm = () => {
  const methods = useForm()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = methods

  const [imagePreview, setImagePreview] = useState('')

  const { data } = useGetRecipientsList(100)
  const { mutate } = usePostRecipientsCreate()
  const { mutate: getImageUrl, isPending: isPendingGetImageUrl } =
    usePostImageUrlCreate(setValue)

  const handleCreateImageUrl = async (
    value: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (value.target.files) {
      setImagePreview(URL?.createObjectURL(value.target.files[0]))

      const formData = new FormData()
      formData.append('image', value.target.files[0])
      getImageUrl(formData)
    }
  }

  const handleResetImage = () => {
    setValue('backgroundImageURL', '')
    setImagePreview('')
  }

  const onSubmit: SubmitHandler<FieldValues> = (value: FieldValues) => {
    value.name = `${value.nickName}/${value.password}/${value.question}`

    const { question, nickName, password, backgroundImageSelect, ...values } =
      value

    const newValue = { ...values, ...{ team: '2-3' } }

    mutate(newValue)
  }

  return (
    <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
      <div className={cx('form-field')}>
        <div>
          <label className={cx('label')} htmlFor="question">
            질문 내용
          </label>
          <Textarea
            id="question"
            placeholder={PLACEHOLDER.question}
            maxLength={30}
            {...register('question', {
              required: ERROR_MESSAGE.question.required,
              minLength: { value: 5, message: ERROR_MESSAGE.question.min },
              maxLength: { value: 30, message: ERROR_MESSAGE.question.max }
            })}
          />
          {errors.question && (
            <p className={cx('form-field-message')}>
              {errors.question.message?.toString()}
            </p>
          )}
        </div>
        <div className={cx('responsive-flex')}>
          <div className={cx('responsive-flex-item')}>
            <label className={cx('label')} htmlFor="nickName">
              닉네임
            </label>
            <Input
              id="nickName"
              size="responsive"
              type="text"
              placeholder={PLACEHOLDER.nickname}
              maxLength={4}
              {...register('nickName', {
                required: ERROR_MESSAGE.nickname.required,
                maxLength: {
                  value: 4,
                  message: ERROR_MESSAGE.nickname.max
                },
                pattern: {
                  value: /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
                  message: ERROR_MESSAGE.nickname.letters
                },
                validate: (value) =>
                  data.results.some(
                    (user: GetRecipientsList) =>
                      user.name.split('/')[0] === value
                  )
                    ? ERROR_MESSAGE.nickname.duplicate
                    : true
              })}
            />
            {errors.nickName && (
              <p className={cx('form-field-message')}>
                {errors.nickName.message?.toString()}
              </p>
            )}
          </div>
          <div className={cx('responsive-flex-item')}>
            <label className={cx('label')} htmlFor="password">
              비밀번호
            </label>
            <Input
              id="password"
              size="responsive"
              type="password"
              placeholder={PLACEHOLDER.password}
              maxLength={4}
              {...register('password', {
                required: ERROR_MESSAGE.password.required,
                minLength: {
                  value: 4,
                  message: ERROR_MESSAGE.password.letters
                },
                maxLength: {
                  value: 4,
                  message: ERROR_MESSAGE.password.letters
                },
                pattern: {
                  value: /^\d{4}$/,
                  message: ERROR_MESSAGE.password.number
                }
              })}
            />
            {errors.password && (
              <p className={cx('form-field-message')}>
                {errors.password.message?.toString()}
              </p>
            )}
          </div>
        </div>
        <div>
          <label className={cx('label')} htmlFor="category">
            분야
          </label>
          <Tags isAll={false} {...register('backgroundColor')} />
        </div>
        <div>
          <label className={cx('label')}>사진 (선택)</label>
          <div className={cx('form-field-image')}>
            {!isPendingGetImageUrl ? (
              imagePreview ? (
                <div
                  className={cx('form-field-image-wrap')}
                  onClick={handleResetImage}
                >
                  <div className={cx('form-field-image-preview')}>
                    <Image
                      className={cx('form-field-image-preview-cover')}
                      src={imagePreview}
                      alt="질문 등록 첨부 사진"
                      fill
                      sizes="100%"
                    />
                  </div>
                  <X className={cx('form-field-image-wrap-icon')} />
                </div>
              ) : (
                <>
                  <label
                    className={cx('form-field-image-label')}
                    htmlFor="backgroundImageSelect"
                  >
                    <Plus className={cx('form-field-image-icon')} />
                  </label>
                  <input
                    className={cx('form-field-image-input')}
                    id="backgroundImageSelect"
                    type="file"
                    {...register('backgroundImageSelect', {
                      onChange: (value) => handleCreateImageUrl(value)
                    })}
                  />
                </>
              )
            ) : (
              <span className={cx('loader')}></span>
            )}
          </div>
        </div>
      </div>
      <div className={cx('button')}>
        <Button
          text="질문하기"
          size="full"
          type="submit"
          isDisabled={isPendingGetImageUrl}
        />
      </div>
    </form>
  )
}

export default QuestionForm
