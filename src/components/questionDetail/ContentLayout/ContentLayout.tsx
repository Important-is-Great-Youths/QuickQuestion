import classNames from 'classnames/bind'
import styles from './ContentLayout.module.scss'
import { useState, useEffect } from 'react'
const cx = classNames.bind(styles)

interface ContentLayoutProps {
  text: '질문' | '답변'
  messageCount?: number
  children: React.ReactNode
}

const ContentLayout = ({
  text,
  messageCount = 0,
  children
}: ContentLayoutProps) => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    if (text === '답변') {
      setIsShow(true)
    } else if (text === '질문') {
      setIsShow(false)
    }
  }, [text])

  return (
    <div className={cx('ContentLayout')}>
      <div className={cx('ContentLayout-title')}>
        {isShow && (
          <span className={cx('ContentLayout-num')}>{messageCount}개의</span>
        )}
        <span className={cx('ContentLayout-text')}>{text}</span>
      </div>
      {children}
    </div>
  )
}

export default ContentLayout
