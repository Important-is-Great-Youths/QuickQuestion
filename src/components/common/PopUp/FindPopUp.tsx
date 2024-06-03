import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import classNames from 'classnames/bind'
import { useGetRecipientsList } from '@/hooks/useRecipients'
import { ERROR_MESSAGE, PLACEHOLDER } from '@/constants/formMessage'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import styles from './FindPopUp.module.scss'

const cx = classNames.bind(styles)

type FindPopUpFormValues = {
  nickname: string
  password: string
}

const FindPopUp = () => {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit
  } = useForm<FindPopUpFormValues>()

  const { data } = useGetRecipientsList(100)

  const router = useRouter()

  const onSubmit: SubmitHandler<FindPopUpFormValues> = (value) => {
    if (
      !data.results.some(
        (user: any) =>
          user.name.split('/')[0] + '/' + user.name.split('/')[1] ===
          value.nickname + '/' + value.password
      )
    ) {
      setError('nickname', { message: ERROR_MESSAGE.nickname.register })
      return
    } else {
      const foundId = data.results.find(
        (user: any) =>
          user.name.split('/')[0] + '/' + user.name.split('/')[1] ===
          value.nickname + '/' + value.password
      )
      localStorage.setItem(
        'user',
        JSON.stringify({ nickname: value.nickname, password: value.password })
      )
      router.push(`/questiondetail/${foundId.id}`)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx('findpopup')}>
      <div className={cx('findpopup-forms')}>
        <div className={cx('findpopup-form')}>
          <p className={cx('findpopup-form-label')}>닉네임</p>
          <Input
            size="md"
            type="text"
            placeholder={PLACEHOLDER.nicknameHidden}
            maxLength={4}
            {...register('nickname', {
              required: ERROR_MESSAGE.nickname.required,
              maxLength: {
                value: 4,
                message: ERROR_MESSAGE.nickname.max
              },
              pattern: {
                value: /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
                message: ERROR_MESSAGE.nickname.letters
              }
            })}
          />
          {errors.nickname && (
            <p className={cx('findpopup-form-error')}>
              {errors.nickname.message}
            </p>
          )}
        </div>
        <div className={cx('findpopup-form')}>
          <p className={cx('findpopup-form-label')}>비밀번호</p>
          <Input
            size="md"
            type="password"
            placeholder={PLACEHOLDER.passwordHidden}
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
            <p className={cx('findpopup-form-error')}>
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      <Button text="내 질문 보러 가기" size="md" type="submit" />
    </form>
  )
}

export default FindPopUp
