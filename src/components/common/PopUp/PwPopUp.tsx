import classNames from 'classnames/bind'
import styles from './PwPopUp.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '../Input/Input'
import Button from '../Button/Button'

const cx = classNames.bind(styles)

interface PwPopUpProps {}

type PwPopUpFormValues = {
  password: string
}

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
          <Input size="sm" type="password" placeholder="****" />
        </div>
        <Button text="확인" size="md" type="submit" />
      </div>
    </form>
  )
}

export default PwPopUp
