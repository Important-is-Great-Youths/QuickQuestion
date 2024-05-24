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

  const pageCount = 5 // 화면에 보여지는 총 페이지 갯수
  const currentGroup = Math.ceil(currentPage / pageCount)
  let firstNumber = Math.max(1, (currentGroup - 1) * pageCount + 1)
  let lastNumber = Math.min(totalPage, currentGroup * pageCount)

  const prevGroup = firstNumber - 1 // 이전 페이지 그룹
  const nextGroup = lastNumber + 1 // 다음 페이지 그룹

  const prev = Math.max(1, currentPage - 1) // 이전버튼
  const next = Math.min(totalPage, currentPage + 1) // 다음버튼

  const handlePageChange = (page: number) => {
    onPageChange(page)
  }

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation() // 클릭 이벤트 전파 중지
    onPageChange(parseInt(event.currentTarget.value, 10))
    event.currentTarget.blur() // 클릭한 버튼의 포커스 제거
  }

  const buttons = [] // 버튼들 배열
  for (let i = firstNumber; i <= lastNumber; i++) {
    buttons.push(
      <button
        key={i}
        type="button"
        className={cx('button', `button-size-${size}`, {
          'button-active': i === currentPage
        })}
        onMouseDown={handleButtonClick}
        value={i.toString()}
        onClick={handleButtonClick}
      >
        {i}
      </button>
    )
  }

  return (
    <div className={cx('pagination')}>
      <button
        className={cx('pageButton', `button-size-${size}`)}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(prev)}
      >
        &lt;
      </button>

      {buttons}

      <button
        className={cx('pageButton', `button-size-${size}`)}
        disabled={currentPage === totalPage}
        onClick={() => handlePageChange(next)}
      >
        &gt;
      </button>
    </div>
  )
}
