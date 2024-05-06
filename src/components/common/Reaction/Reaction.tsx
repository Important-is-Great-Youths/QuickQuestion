import classNames from 'classnames/bind'
import styles from './Reaction.module.scss'

const cx = classNames.bind(styles)

interface ReactionProps {
  emoji: '😊' | '🤣' | '🧐'
  count: number
}

const Reaction = ({ emoji, count }: ReactionProps) => {
  count = count ?? 0
  return (
    <button className={cx('reaction')} type="button">
      <span className={cx('reaction-emoji')}>{emoji}</span>
      <span>{count}</span>
    </button>
  )
}

export default Reaction
