import classNames from 'classnames/bind'
import styles from './Input.module.scss'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

const cx = classNames.bind(styles)

interface InputProps {
  size: 'lg' | 'sm'
  type: 'text' | 'password'
  placeholder?: string
}

const Input = ({ size, type, placeholder }: InputProps) => {
  return (
    <input
      className={cx('input', `input-size-${size}`)}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input
