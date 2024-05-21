import classNames from 'classnames/bind'
import styles from './Pagination.module.scss'
import { useState } from 'react'

import { GetRecipientsList } from '@/types/recipients'
const cx = classNames.bind(styles)

interface PaginationProps {
  size?: 'lg' | 'md'
  data: GetRecipientsList
  limit: number
  currentPage: number
  totalCount?: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  data,
  limit,
  currentPage,
  totalCount = data.length || 0,
  size,
  onPageChange
}: PaginationProps) => {
  const totalPage = Math.ceil(totalCount / limit)

  const pageCount = 5 //화면에 보여지는 총 페이지 갯수

  let firstNumber = Math.max(1, currentPage - Math.floor(pageCount / 2))
  let lastNumber = Math.min(totalPage, firstNumber + pageCount - 1)

  const prev = Math.max(1, currentPage - 1) // 이전버튼
  const next = Math.min(totalPage, currentPage + 1) //다음버튼
  const buttons = [] //버튼들 배열
  for (let i = firstNumber; i <= lastNumber; i++) {
    buttons.push(
      <button
        key={i}
        type="button"
        className={cx('button', `button-size-${size}`, {
          'button-active': i === currentPage
        })}
        onClick={() => onPageChange(i)}
      >
        {i}
      </button>
    )
  }

  return (
    <div className={cx('pagination')}>
      <button
        className={cx('button', `button-size-${size}`)}
        disabled={currentPage === 1}
        onClick={() => onPageChange(prev)}
      >
        &lt;
      </button>
      {buttons}

      <button
        className={cx('button', `button-size-${size}`)}
        disabled={currentPage === totalPage}
        onClick={() => onPageChange(next)}
      >
        &gt;
      </button>
    </div>
  )
}
