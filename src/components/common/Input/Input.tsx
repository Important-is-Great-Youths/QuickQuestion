import React from 'react'
import classNames from 'classnames/bind'
import styles from './Input.module.scss'

const cx = classNames.bind(styles)

interface InputProps {
  size: 'lg' | 'md'
  type: 'text' | 'password'
  id?: string
  placeholder?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size, type, id, placeholder, ...props }, ref) => {
    return (
      <input
        className={cx('input', `input-size-${size}`)}
        type={type}
        id={id}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    )
  }
)

export default Input
