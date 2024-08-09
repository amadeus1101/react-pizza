import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { filterSelector } from "../../redux/filters/selectors";

import { setPage } from "../../redux/filters/slice";

let PAGES = [1, 2, 3];
const MAXPAGE = 3;

const Pagination: React.FC = React.memo(() => {
  const { page } = useAppSelector(filterSelector);
  const dispatch = useAppDispatch();

  const stepBack = () => {
    if (page > 1) {
      if (page === PAGES[0]) {
        PAGES = PAGES.map((page) => page - 1);
      }
      dispatch(setPage(page - 1));
    }
  };
  const stepForward = () => {
    if (page < MAXPAGE) {
      if (page === PAGES[2]) {
        PAGES = PAGES.map((el) => el + 1);
      }
      dispatch(setPage(page + 1));
    }
  };
  const onClickPage = (pg: number) => {
    dispatch(setPage(pg));
  };

  return (
    <div className="pagination">
      <ul>
        <li onClick={() => stepBack()}>◀</li>
        {PAGES.map((el) => (
          <li
            key={el}
            className={el === page ? "active" : ""}
            onClick={() => onClickPage(el)}
          >
            {el}
          </li>
        ))}
        <li onClick={() => stepForward()}>▶</li>
      </ul>
    </div>
  );
});

export default Pagination;
