import classNames from "classnames/bind";
import styles from "./Pagination.module.scss";
import { useState } from "react";
import data from "./data.json";

const cx = classNames.bind(styles);

interface PaginationProps {
  size?: "lg" | "md";
  totalCount?: number;
  limit?: number;
}
//total 데이터 총 갯수, limit 한 페이지에 나타낼 데이터 갯수
export const Pagination = ({
  totalCount = data.length, //데이터의 총 갯
  limit = 6, //한 페이지에 나타낼 데이터 수
  size
}: PaginationProps) => {
  const totalPage = Math.ceil(totalCount / limit);
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지
  const [offset, setOffest] = useState(0); //데이터 불러온 갯수
  const pageCount = 5; //화면에 보여지는 총 페이지 갯수

  let firstNumber = Math.max(1, currentPage - Math.floor(pageCount / 2));
  let lastNumber = Math.min(totalPage, firstNumber + pageCount - 1);

  const prev = Math.max(1, currentPage - 1); // 이전버튼
  const next = Math.min(totalPage, currentPage + 1); //다음버튼

  const buttons = []; //버튼들 배열
  for (let i = firstNumber; i <= lastNumber; i++) {
    buttons.push(
      <button
        key={i}
        type="button"
        className={cx("button", `button-size-${size}`, {
          "button-active": i === currentPage
        })}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div>
      {data.map(({ id, name }) => (
        <p key={id}>
          {id} : {name}
        </p>
      ))}

      <div className={cx("pagination")}>
        <button
          className={cx("button", `button-size-${size}`)}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev)}
        >
          &lt;
        </button>
        {buttons}
        {/* {Array.from({ length: lastNumber - firstNumber + 1 }, (_, index) => {
          const pageNumber = firstNumber + index;
          return (
            <button
              key={pageNumber}
              className={cx("button", `button-size-${size}`, {
                "button-active": pageNumber === currentPage
              })}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })} */}
        <button
          className={cx("button", `button-size-${size}`)}
          disabled={currentPage === totalPage}
          onClick={() => setCurrentPage(next)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
