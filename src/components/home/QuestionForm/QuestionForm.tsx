import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import classNames from 'classnames/bind'
import { Plus } from 'lucide-react'

import { GetRecipientsList } from '@/types/recipients'
import { ERROR_MESSAGE, PLACEHOLDER } from '@/constants/formMessage'
import {
  useGetRecipientsList,
  usePostRecipientsCreate
} from '@/hooks/useRecipients'
import Textarea from '@/components/common/Textarea/Textarea'
import Input from '@/components/common/Input/Input'
import Tags from '@/components/common/Tags/Tags'
import Button from '@/components/common/Button/Button'

import styles from './QuestionForm.module.scss'

const cx = classNames.bind(styles)

const QuestionForm = () => {
  const { data } = useGetRecipientsList(100)
  const { mutate } = usePostRecipientsCreate()
  console.log(data)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = (value: FieldValues) => {
    value.name = `${value.nickName}/${value.password}/${value.question}`

    const newValue = { ...value, ...{ team: '2-3' } }
  }

  return (
    <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
      <div className={cx('form-field')}>
        <div>
          <label className={cx('label')} htmlFor="question">
            질문 내용
          </label>
          <Textarea id="question" placeholder={PLACEHOLDER.question} />
        </div>
        <div className={cx('responsive-flex')}>
          <div className={cx('responsive-flex-item')}>
            <label className={cx('label')} htmlFor="nickName">
              닉네임
            </label>
            <Input
              id="nickName"
              size="lg"
              type="text"
              placeholder={PLACEHOLDER.nickname}
              {...register('nickName', {
                required: ERROR_MESSAGE.nickname.required,
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
              size="lg"
              type="text"
              placeholder={PLACEHOLDER.password}
              {...register('password')}
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
          <Tags isAll={false} />
        </div>
        <div>
          <label className={cx('label')}>사진 (선택)</label>
          <div>
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
              // {...register('backgroundImageSelect', {
              //   onChange: (value) => handleCreateImageUrl(value)
              // })}
            />
          </div>
        </div>
      </div>
      <div className={cx('button')}>
        <Button text="질문하기" size="full" type="submit" />
      </div>
    </form>
  )
}

export default QuestionForm
