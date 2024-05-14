import { useState, useRef, useEffect } from 'react'
import classNames from 'classnames/bind'

import registDragEvent from '@/utils/registDragEvent'

import styles from './CurationCardList.module.scss'

const cx = classNames.bind(styles)

const CurationCardList = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [transX, setTransX] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const [visibleCardCount, setVisibleCardCount] = useState(3)

  const cardRef = useRef<HTMLLIElement>(null)

  const totalCards = 6
  const cardListGap = 16

  const cards = Array.from({ length: totalCards }, (_, index) => index + 1)

  const inrange = (v: number, min: number, max: number) => {
    if (v < min) return min
    if (v > max) return max
    return v
  }

  useEffect(() => {
    handleGetCardWidth()
    if (!cardRef.current) return
    window.addEventListener('resize', handleGetCardWidth)
    return () => {
      window.removeEventListener('resize', handleGetCardWidth)
    }
  }, [cardRef.current])

  useEffect(() => {
    const handleResize = () => {
      const currentWindowSize = window.innerWidth

      if (currentWindowSize > 767 && visibleCardCount === 2) {
        setVisibleCardCount(3)
      } else if (currentWindowSize <= 767 && visibleCardCount === 3) {
        setVisibleCardCount(2)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [visibleCardCount])

  const handleGetCardWidth = () => {
    setCardWidth(
      Number(cardRef.current?.getBoundingClientRect().width) + cardListGap
    )
  }

  return (
    <div className={cx('viewer')}>
      <ul
        className={cx('card-list')}
        style={{
          transform: `translateX(${-currentIndex * cardWidth + transX}px)`,
          transition: `transform ${transX ? 0 : cardWidth}ms ease-in-out 0s`
        }}
        {...registDragEvent({
          onDragChange: (deltaX) => {
            setTransX(inrange(deltaX, -cardWidth, cardWidth))
          },
          onDragEnd: (deltaX) => {
            const maxIndex = cards.length - visibleCardCount

            if (deltaX < -100)
              setCurrentIndex(inrange(currentIndex + 1, 0, maxIndex))
            if (deltaX > 100)
              setCurrentIndex(inrange(currentIndex - 1, 0, maxIndex))

            setTransX(0)
          }
        })}
      >
        {cards.map((card) => (
          <li className={cx('card-list-item')} key={card} ref={cardRef}>
            {card}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CurationCardList
