import classNames from 'classnames/bind'
import styles from './PopUp.module.scss'
import { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

const cx = classNames.bind(styles)

interface PopUpProps {}

const PopUp = ({}: PopUpProps) => {
  return (
    <div className={cx('popup')}>
      <div className={cx('popup-forms')}>
        <div className={cx('popup-form')}>
          <p className={cx('popup-form-label')}>닉네임</p>
          <Input size="sm" type="text" placeholder="닉네임을 입력해주세요" />
        </div>
        <div className={cx('popup-form')}>
          <p className={cx('popup-form-label')}>비밀번호</p>
          <Input
            size="sm"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
      </div>
      <Button text="내 질문 보러 가기" size="md" type="submit" />
    </div>
  )
}

export default PopUp
