import classNames from 'classnames/bind'
import styles from './PopUp.module.scss'
import { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useForm, SubmitHandler } from 'react-hook-form'

const cx = classNames.bind(styles)

interface PopUpProps {}

type PopUpFormValues = {
  nickname: string
  password: string
}

const PopUp = ({}: PopUpProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<PopUpFormValues>()
  const onSubmit: SubmitHandler<PopUpFormValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx('popup')}>
      <div className={cx('popup-forms')}>
        <div className={cx('popup-form')}>
          <p className={cx('popup-form-label')}>닉네임</p>
          <Input
            size="sm"
            type="text"
            placeholder="닉네임을 입력해주세요"
            {...register('nickname', {
              required: { value: true, message: '필수 항목입니다.' },
              maxLength: { value: 4, message: '최대 4자만 입력 가능합니다.' }
            })}
          />
        </div>
        <div className={cx('popup-form')}>
          <p className={cx('popup-form-label')}>비밀번호</p>
          <Input
            size="sm"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: { value: true, message: '필수 항목입니다.' },
              minLength: { value: 4, message: '숫자 4자만 입력 가능합니다.' },
              maxLength: { value: 4, message: '숫자 4자만 입력 가능합니다.' },
              pattern: { value: /^\d+$/, message: '숫자만 입력 가능합니다.' }
            })}
          />
        </div>
      </div>
      <Button text="내 질문 보러 가기" size="md" type="submit" />
    </form>
  )
}

export default PopUp
