import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

interface ButtonProps {
  text: string
  size: 'full' | 'lg' | 'md' | 'sm'
  type: 'button' | 'submit'
  variant?: 'default' | 'another'
  isDisabled?: boolean
  onClick?: () => void
}
const Button = ({
  text,
  size,
  type,
  variant = 'default',
  isDisabled,
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
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}

export default Button
