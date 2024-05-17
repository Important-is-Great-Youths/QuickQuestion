import classNames from 'classnames/bind'
import styles from './Reaction.module.scss'
import { useGetReaction, usePostReaction } from '@/hooks/useRecipients'
import { useState, useEffect } from 'react'
const cx = classNames.bind(styles)

interface ReactionProps {
  id: string
  isHide?: boolean
}

interface ReactionData {
  results: { emoji: string; count: number }[]
}

const emojiMap: { [key: string]: string } = {
  '😊': 'happy',
  '🤣': 'lol',
  '🧐': 'curious'
}

interface EmojiCounts {
  [key: string]: number
}

const Reaction = ({ id, isHide }: ReactionProps) => {
  console.log(`나는 몇번째 ${id}`)
  const { data } = useGetReaction(id) as { data: ReactionData }
  const { mutate } = usePostReaction(id)

  console.log(data)
  const [clickState, setClickState] = useState<{ [key: string]: boolean }>({
    '😊': false,
    '🤣': false,
    '🧐': false
  })

  const [emojiCounts, setEmojiCounts] = useState<EmojiCounts>({
    happy: 0,
    lol: 0,
    curious: 0
  })

  useEffect(() => {
    data?.results.forEach(({ emoji, count }) => {
      const key = emojiMap[emoji]
      if (key) {
        setEmojiCounts((prevCounts) => ({
          ...prevCounts,
          [key]: count
        }))
      }
    })
  }, [data])

  const handleClickCount = (emoji: string) => {
    const type = clickState[emoji] ? 'decrease' : 'increase'

    mutate(
      { emoji, type },
      {
        onSuccess: () => updateEmojiCount(emoji, type),
        onError: (error) => console.error(`${emoji} 반응 전송 에러: `, error)
      }
    )
  }

  const updateEmojiCount = (emoji: string, type: 'increase' | 'decrease') => {
    const key = emojiMap[emoji]
    if (key) {
      setEmojiCounts((prevCounts) => ({
        ...prevCounts,
        [key]:
          type === 'increase'
            ? prevCounts[key] + 1
            : Math.max(0, prevCounts[key] - 1)
      }))
    }

    setClickState((prevState) => ({ ...prevState, [emoji]: !prevState[emoji] }))
  }

  const renderButton = (emoji: string) => {
    const key = emojiMap[emoji]
    const count = emojiCounts[key]
    return (
      (!isHide || count > 0) && (
        <button
          key={emoji}
          className={cx('reaction')}
          onClick={() => handleClickCount(emoji)}
        >
          <span className={cx('reaction-emoji')}>{emoji}</span>
          <span>{count}</span>
        </button>
      )
    )
  }

  return <div>{Object.keys(emojiMap).map((emoji) => renderButton(emoji))}</div>
}

export default Reaction
