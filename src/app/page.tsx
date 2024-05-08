'use client'

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import classNames from 'classnames/bind'

import {
  useGetRecipientsList,
  usePostRecipientsCreate
} from '@/hooks/useRecipients'
import { GetRecipientsList } from '@/types/recipients'
import { ERROR_MESSAGE, PLACEHOLDER } from '@/constants/formMessage'
import Input from '@/components/common/Input/Input'

import styles from './page.module.scss'

const cx = classNames.bind(styles)

export default function Home() {
  const { data } = useGetRecipientsList(100)
  const { mutate } = usePostRecipientsCreate()

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
    <div className={styles.main}>
      <div className={cx('container')}>
        <div className={cx('curation-card-list')}>
          <p>인기 질문</p>
          <div>card list</div>
        </div>
        <div>
          <p className={cx('text')}>빠르게 질문 해보세요!</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="nickName">닉네임</label>
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
                <span>{errors.nickName.message?.toString()}</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
