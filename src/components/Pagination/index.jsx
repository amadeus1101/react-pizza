import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/filterSlice";

let pages = [1, 2, 3];
const MAXPAGE = 3;

function Pagination() {
  const activePage = useSelector((state) => state.filter.page);
  const dispatch = useDispatch();

  const stepBack = () => {
    if (activePage > 1) {
      if (activePage === pages[0]) {
        pages = pages.map((page) => page - 1);
      }
      dispatch(setCurrentPage(activePage - 1));
    }
  };
  const stepForward = () => {
    if (activePage < MAXPAGE) {
      if (activePage === pages[2]) {
        pages = pages.map((page) => page + 1);
      }
      dispatch(setCurrentPage(activePage + 1));
    }
  };
  const onClickPage = (pg) => {
    dispatch(setCurrentPage(pg));
  };

  return (
    <div className="pagination">
      <ul>
        <li onClick={() => stepBack()}>◀</li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === activePage ? "active" : ""}
            onClick={() => onClickPage(page)}
          >
            {page}
          </li>
        ))}
        <li onClick={() => stepForward()}>▶</li>
      </ul>
    </div>
  );
}

export default Pagination;
