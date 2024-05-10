import React from 'react'
import classNames from 'classnames/bind'
import styles from './Input.module.scss'

const cx = classNames.bind(styles)

interface InputProps {
  size: 'lg' | 'md' | 'responsive'
  type: 'text' | 'password'
  id?: string
  placeholder?: string
  maxLength?: number
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size, type, id, placeholder, maxLength, ...props }, ref) => {
    return (
      <input
        className={cx('input', `input-size-${size}`)}
        type={type}
        id={id}
        placeholder={placeholder}
        maxLength={maxLength}
        ref={ref}
        {...props}
      />
    )
  }
)

export default Input
