import classNames from 'classnames/bind'
import styles from './Pagination.module.scss'
import { GetRecipientsList } from '@/types/recipients'
const cx = classNames.bind(styles)

interface PaginationProps {
  size?: 'lg' | 'md'
  data: GetRecipientsList
  limit: number
  currentPage: number
  totalCount: number
  viewCount: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  data,
  limit,
  currentPage,
  totalCount,
  size,
  viewCount,
  onPageChange
}: PaginationProps) => {
  const totalPage = Math.ceil(totalCount / viewCount)

  const pageCount = 5 //화면에 보여지는 총 페이지 갯수
  const currentGroup = Math.ceil(currentPage / pageCount)
  let firstNumber = Math.max(1, (currentGroup - 1) * pageCount + 1)
  let lastNumber = Math.min(totalPage, currentGroup * pageCount)

  const prevGroup = firstNumber - 1 // 이전 페이지 그룹
  const nextGroup = lastNumber + 1 // 다음 페이지 그룹

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
  console.log(currentPage)
  console.log({ totalPage, currentGroup, firstNumber, lastNumber })
  return (
    <div className={cx('pagination')}>
      <button
        className={cx('button', `button-size-${size}`)}
        disabled={currentPage === 1}
        onClick={() => onPageChange(prev)}
      >
        &lt;
      </button>
      {currentGroup > 1 && (
        <button
          className={cx('button', `button-size-${size}`)}
          onClick={() => onPageChange(prevGroup)}
        >
          &laquo;
        </button>
      )}
      {buttons}
      {currentGroup < Math.ceil(totalPage / pageCount) && (
        <button
          className={cx('button', `button-size-${size}`)}
          onClick={() => onPageChange(nextGroup)}
        >
          &raquo;
        </button>
      )}
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
