import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './NoAnswer.module.scss'
import Image from 'next/image'
import { SquareCheck, Square } from 'lucide-react'
const cx = classNames.bind(styles)

interface NoAnswerProps {
  setShowNoAnswer: (show: boolean) => void
}

const NoAnswer: React.FC<NoAnswerProps> = ({ setShowNoAnswer }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleCheckboxChange = () => {
    const newChecked = !isChecked
    setIsChecked(newChecked)
    setShowNoAnswer(newChecked)
  }

  return (
    <label className={cx('button')} htmlFor="customCheckbox">
      <input
        className={cx('customCheckbox')}
        type="checkbox"
        id="customCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span>미답변만 보기</span>
      {isChecked ? (
        <SquareCheck className={cx('checkbox')} />
      ) : (
        <Square className={cx('checkbox')} />
      )}
    </label>
  )
}

export default NoAnswer
