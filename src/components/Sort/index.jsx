import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";
import { sortArray } from "../../constants";

function Sort() {
  const sort = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();
  const [isSortOpened, setSortOpened] = useState(false);
  const sortRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (isSortOpened && !event.composedPath().includes(sortRef.current)) {
        setSortOpened(false);
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const onChangeSort = (obj) => {
    if (obj.name !== sort.name) {
      setSortOpened(false);
      dispatch(setSort(obj));
    }
  };

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={() => setSortOpened(!isSortOpened)}>{sort.name}</span>
      </div>
      {isSortOpened && (
        <div className="sort__popup">
          <ul>
            {sortArray.map((obj, index) => (
              <li
                key={index}
                className={sort.name === obj.name ? "active" : ""}
                onClick={() => onChangeSort(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
