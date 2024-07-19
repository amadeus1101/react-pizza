import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";

const sortArray = [
  { name: "популярности 🔽", sortType: "rating", order: "asc" },
  { name: "популярности 🔼", sortType: "rating", order: "desc" },
  { name: "цене 🔽", sortType: "price", order: "asc" },
  { name: "цене 🔼", sortType: "price", order: "desc" },
  { name: "алфавиту 🔽", sortType: "title", order: "asc" },
  { name: "алфавиту 🔼", sortType: "title", order: "desc" },
];

function Sort() {
  const sort = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();
  const [isSortOpened, setSortOpened] = useState(false);

  const onChangeSort = (obj) => {
    if (obj.name !== sort.name) {
      setSortOpened(false);
      dispatch(setSort(obj));
    }
  };

  return (
    <div className="sort">
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
