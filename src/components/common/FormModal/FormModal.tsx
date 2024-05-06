import classNames from 'classnames/bind'
import styles from './FormModal.module.scss'
import Button from '@/components/common/Button/Button'
import Input from '@/components/common/Input/Input'
import Textarea from '@/components/common/Textarea/Textarea'
import { useState } from 'react'
import { useMutation } from 'react-query'
import axios from 'axios'
const cx = classNames.bind(styles)

const FormModal = () => {
  const initialFormState = {
    nickname: '',
    password: '',
    answer: ''
  }
  const [question, setQuestion] = useState('') //질문 내용
  const [formState, setFormState] = useState(initialFormState) //

  const handleNicknameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let nickname = event.target.value
    if (nickname.length > 4) {
      nickname = nickname.slice(0, 4)
    }
    setFormState((prevState) => ({
      ...prevState,
      nickname: event.target.value
    }))
  }

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let newPassword = event.target.value
    if (newPassword.length > 4) {
      newPassword = newPassword.slice(0, 4)
    }
    setFormState((prevState) => ({
      ...prevState,
      password: newPassword
    }))
  }

  const handleAnswerInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      answer: event.target.value
    }))
  }
  return (
    <>
      <div className={cx('modalWraaper')}>
        <div className={cx('question-container')}>
          <p className={cx('question-title')}>질문</p>
          <p className={cx('question')}>{question}</p>
        </div>

        <div className={cx('questionField')}>
          <div className={cx('content-container')}>
            <label className={cx('label')}>프로필 사진</label>
          </div>
          <div className={cx('content-container')}>
            <label className={cx('label')}>닉네임</label>
            <Input
              size="sm"
              type="text"
              // maxLength={4}
              // onChange={handleNicknameInputChange}
            />
            //reacthookform 컨트롤러 사용
          </div>
          <div className={cx('content-container')}>
            <label className={cx('label')}>비밀번호</label>
            <Input
              size="sm"
              type="password"
              // onChange={handlePasswordInputChange}
              // maxLength={4}
            />
          </div>
          <div className={cx('content-container')}>
            <label className={cx('label')}>답변 내용</label>
            <Textarea
            // onChange={handleAnswerInputChange}
            />
          </div>
        </div>
        <div className="button-container">
          <Button text="취소하기" size="md" variant="another" type="submit" />
          <Button text="답변하기" size="md" variant="another" type="submit" />
        </div>
      </div>
    </>
  )
}

export default FormModal
