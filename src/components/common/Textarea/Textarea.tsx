import React from 'react'
import classNames from 'classnames/bind'

import styles from './Textarea.module.scss'

const cx = classNames.bind(styles)

interface TextareaProps {
  id: string
  placeholder: string
  maxLength?: number
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, placeholder, maxLength, ...props }, ref) => {
    return (
      <textarea
        className={cx('textarea')}
        id={id}
        placeholder={placeholder}
        ref={ref}
        maxLength={maxLength}
        {...props}
      />
    )
  }
)

export default Textarea
