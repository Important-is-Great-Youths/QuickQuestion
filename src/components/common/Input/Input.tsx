import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Input.module.scss'
import { Eye, EyeOff } from 'lucide-react'

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
    const [typeState, setTypeState] = useState(type)

    const handleTypeChange = () => {
      setTypeState((prev) => (prev === 'password' ? 'text' : 'password'))
    }

    return (
      <div className={cx('container')}>
        <input
          className={cx('input', `input-size-${size}`)}
          type={typeState}
          id={id}
          placeholder={placeholder}
          maxLength={maxLength}
          ref={ref}
          {...props}
        />
        {type === 'password' &&
          (typeState === 'text' ? (
            <Eye className={cx('icon')} onClick={handleTypeChange} />
          ) : (
            <EyeOff className={cx('icon')} onClick={handleTypeChange} />
          ))}
      </div>
    )
  }
)

export default Input
