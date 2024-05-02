import React from 'react'
import './pagination.css'

export const Pagination = () => {
  // const totalPages = Math.ceil(totalCount / limit)

  // const handlePageChange = (newPage: number) => {
  //   if (newPage >= 1 && newPage <= totalPages) {
  //     onPageChange(newPage)
  //   }
  // }

  return (
    <div className="pagination">
      <button
        type="button"
        className=".pagination-button"
        // onClick={() => handlePageChange(currentPage - 1)}
        // disabled={currentPage === 1}
      >
        {'<'}
      </button>
      <button type="button" className=".pagination-button">
        {' '}
        1
      </button>
      <button type="button" className=".pagination-button">
        {' '}
        1
      </button>
      <button type="button" className=".pagination-button">
        {' '}
        1
      </button>
      <button type="button" className=".pagination-button">
        {' '}
        1
      </button>
      {/* <span className=".pagination-button.currentPage">{currentPage}</span> */}
      <button
        type="button"
        // onClick={() => handlePageChange(currentPage + 1)}
        // disabled={currentPage === totalPages}
      >
        {'>'}
      </button>
    </div>
  )
}
