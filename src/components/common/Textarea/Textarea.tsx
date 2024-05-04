import classNames from 'classnames/bind'
import styles from './Textarea.module.scss'

const cx = classNames.bind(styles)

const Textarea = () => {
  return <textarea className={cx('textarea')} />
}

export default Textarea
