import classNames from 'classnames/bind'
import styles from './Reaction.module.scss'

const cx = classNames.bind(styles)

interface ReactionProps {
  happyCount: number
  lolCount: number
  curiCount: number
}

const Reaction = ({ happyCount, lolCount, curiCount }: ReactionProps) => {
  const emojiandCountList = [
    { emoji: '😊', count: happyCount },
    { emoji: '🤣', count: lolCount },
    { emoji: '🧐', count: curiCount }
  ]

  const handleClickCount: any = () => {
    // todo : api 연결 하기
  }

  return (
    <div>
      {emojiandCountList.map(({ emoji, count }) => (
        <button
          className={cx('reaction')}
          type="button"
          onClick={handleClickCount}
        >
          <span className={cx('reaction-emoji')}>{emoji}</span>
          <span>{count ?? 0}</span>
        </button>
      ))}
    </div>
  )
}

export default Reaction
