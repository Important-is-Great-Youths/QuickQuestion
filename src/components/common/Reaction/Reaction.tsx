import classNames from 'classnames/bind'
import styles from './Reaction.module.scss'
import { useGetReaction, usePostReaction } from '@/hooks/useRecipients'
import { useState, useEffect } from 'react'
const cx = classNames.bind(styles)

interface ReactionProps {
  id: string
}

interface ReactionData {
  results: { emoji: string; count: number }[]
}

const initialClickState: { [key: string]: boolean } = {
  '😊': false,
  '🤣': false,
  '🧐': false
}

const Reaction = ({ id }: ReactionProps) => {
  const { data } = useGetReaction(id) as { data: ReactionData }
  const { mutate } = usePostReaction(id)

  useEffect(() => {
    if (data) {
      for (const result of data.results) {
        if (result.emoji === '😊') {
          setHappyCount(result.count)
        }
        if (result.emoji === '🤣') {
          setLolCount(result.count)
        }
        if (result.emoji === '🧐') {
          setCuriousCount(result.count)
        }
      }
    }
  }, [data])

  const [clickState, setClickState] = useState(initialClickState)

  const handleClickCount = (emoji: string) => {
    const type = clickState[emoji] ? 'decrease' : 'increase'

    mutate(
      { emoji: emoji, type: type },
      {
        onSuccess: () => {
          // 성공 시 처리 로직, 예를 들어 상태 업데이트
          updateEmojiCount(emoji, type)
        },
        onError: (error) => {
          console.error(`${emoji} 반응 전송 에러: `, error)
        }
      }
    )
  }

  // 이모지 카운트를 업데이트하는 함수
  const updateEmojiCount = (emoji: string, type: 'increase' | 'decrease') => {
    if (emoji === '😊') {
      setHappyCount((prevCount) =>
        type === 'increase' ? prevCount + 1 : Math.max(0, prevCount - 1)
      )
    } else if (emoji === '🤣') {
      setLolCount((prevCount) =>
        type === 'increase' ? prevCount + 1 : Math.max(0, prevCount - 1)
      )
    } else if (emoji === '🧐') {
      setCuriousCount((prevCount) =>
        type === 'increase' ? prevCount + 1 : Math.max(0, prevCount - 1)
      )
    }

    // 클릭 상태 업데이트
    setClickState((prevState) => ({ ...prevState, [emoji]: !prevState[emoji] }))
  }

  const [happyCount, setHappyCount] = useState(0)
  const [lolCount, setLolCount] = useState(0)
  const [curiousCount, setCuriousCount] = useState(0)

  return (
    <div>
      <button className={cx('reaction')} onClick={() => handleClickCount('😊')}>
        <span className={cx('reaction-emoji')}>😊</span>
        <span>{happyCount}</span>
      </button>
      <button className={cx('reaction')} onClick={() => handleClickCount('🤣')}>
        <span className={cx('reaction-emoji')}>🤣</span>
        <span>{lolCount}</span>
      </button>
      <button className={cx('reaction')} onClick={() => handleClickCount('🧐')}>
        <span className={cx('reaction-emoji')}>🧐</span>
        <span>{curiousCount}</span>
      </button>
    </div>
  )
}

export default Reaction
