import classNames from "classnames/bind";
import styles from "./Pagination.module.scss";

const cx = classNames.bind(styles);
interface PaginationProps {
  size: "lg" | "md";
}

export const Pagination = ({ size }: PaginationProps) => {
  // const totalPages = Math.ceil(totalCount / limit)

  // const handlePageChange = (newPage: number) => {
  //   if (newPage >= 1 && newPage <= totalPages) {
  //     onPageChange(newPage)
  //   }
  // }

  return (
    <div className={cx(`pagination`)}>
      <button
        type="button"
        className={cx(`button`, `button-size-${size}`)}
        // onClick={() => handlePageChange(currentPage - 1)}
        // disabled={currentPage === 1}
      >
        {"<"}
      </button>
      <button type="button" className={cx(`button`, `button-size-${size}`)}>
        {" "}
        1
      </button>
      <button type="button" className={cx(`button`, `button-size-${size}`)}>
        {" "}
        2
      </button>
      <button type="button" className={cx(`button`, `button-size-${size}`)}>
        {" "}
        3
      </button>
      <button type="button" className={cx(`button`, `button-size-${size}`)}>
        {" "}
        4
      </button>
      <button type="button" className={cx(`button`, `button-size-${size}`)}>
        {" "}
        5
      </button>
      {/* <span className=".pagination-button.currentPage">{currentPage}</span> */}
      <button
        type="button"
        className={cx(`button`, `button-size-${size}`)} // onClick={() => handlePageChange(currentPage + 1)}
        // disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};
