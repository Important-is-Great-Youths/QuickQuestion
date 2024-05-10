import classNames from 'classnames/bind'

import styles from './Textarea.module.scss'

const cx = classNames.bind(styles)

interface TextareaProps {
  id: string
  placeholder: string
}

const Textarea = ({ id, placeholder, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cx('textarea')}
      id={id}
      placeholder={placeholder}
      {...props}
    />
  )
}

export default Textarea
