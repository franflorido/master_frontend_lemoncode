import React from "react";
import "./pagination.css";

interface Props {
  totalPost: number;
  postPerPage: number;
  currentPage: number;
  setCurrentPage: (n: number) => void;
}

export const Pagination: React.FC<Props> = (props) => {
  let pages = [];
  const { totalPost, postPerPage, currentPage, setCurrentPage } = props;

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }
  console.log(pages);

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
