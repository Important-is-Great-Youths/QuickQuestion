import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

interface ButtonProps {
  text: string
  size: 'full' | 'lg' | 'md' | 'sm'
  type: 'button' | 'submit'
  variant?: 'default' | 'another'
  onClick?: () => void
}
const Button = ({
  text,
  size,
  type,
  variant = 'default',
  onClick
}: ButtonProps) => {
  return (
    <button
      className={cx(
        `button`,
        `button-size-${size}`,
        `button-variant-${variant}`
      )}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
