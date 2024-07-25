import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/slices/filterSlice";

let pages = [1, 2, 3];
const MAXPAGE = 3;

const Pagination: React.FC = () => {
  const activePage = useSelector((state: any) => state.filter.page);
  const dispatch = useDispatch();

  const stepBack = () => {
    if (activePage > 1) {
      if (activePage === pages[0]) {
        pages = pages.map((page) => page - 1);
      }
      dispatch(setPage(activePage - 1));
    }
  };
  const stepForward = () => {
    if (activePage < MAXPAGE) {
      if (activePage === pages[2]) {
        pages = pages.map((page) => page + 1);
      }
      dispatch(setPage(activePage + 1));
    }
  };
  const onClickPage = (pg: number) => {
    dispatch(setPage(pg));
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
};

export default Pagination;
