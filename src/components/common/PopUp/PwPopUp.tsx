import classNames from 'classnames/bind'
import styles from './PwPopUp.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { ERROR_MESSAGE } from '@/constants/formMessage'

const cx = classNames.bind(styles)

interface PwPopUpProps {}

type PwPopUpFormValues = {
  password: string
}

const pwmessage = ERROR_MESSAGE.password

const PwPopUp = ({}: PwPopUpProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<PwPopUpFormValues>()

  const onSubmit: SubmitHandler<PwPopUpFormValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx('pwpopup')}>
      <p className={cx('pwpopup-label')}>비밀번호</p>
      <div className={cx('pwpopup-inputbox')}>
        <div className={cx('pwpopup-inputbox-input')}>
          <Input
            size="md"
            type="password"
            placeholder="****"
            {...register('password', {
              required: { value: true, message: pwmessage.required },
              minLength: { value: 4, message: pwmessage.letters },
              maxLength: { value: 4, message: pwmessage.letters },
              pattern: { value: /^\d+$/, message: pwmessage.number }
            })}
          />
        </div>
        <Button text="확인" size="md" type="submit" />
      </div>
      {errors.password && (
        <p className={cx('pwpopup-error')}>{errors.password.message}</p>
      )}
    </form>
  )
}

export default PwPopUp
