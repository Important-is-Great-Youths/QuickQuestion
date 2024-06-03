import React from 'react'
import classNames from 'classnames/bind'

import styles from './Textarea.module.scss'

const cx = classNames.bind(styles)

interface TextareaProps {
  id: string
  placeholder: string
  defaultValue?: string
  maxLength?: number
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, placeholder, defaultValue, maxLength, onChange, ...props }, ref) => {
    return (
      <textarea
        className={cx('textarea')}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        ref={ref}
        maxLength={maxLength}
        onChange={onChange}
        {...props}
      />
    )
  }
)

export default Textarea
