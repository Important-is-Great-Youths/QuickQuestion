import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './NoAnswer.module.scss'
import Image from 'next/image'

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
    <div className={cx('button')}>
      <input
        className={cx('customCheckbox')}
        type="checkbox"
        id="customCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="customCheckbox">
        {isChecked ? (
          <Image src="/checked.svg" alt="Checked" width={24} height={24} />
        ) : (
          'null'
        )}
        <span>미답변만 보기</span>
      </label>
    </div>
  )
}

export default NoAnswer
