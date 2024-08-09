import React from "react";
import { categoriesArray } from "../../constants";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { filterSelector } from "../../redux/filters/selectors";
import { setCategory } from "../../redux/filters/slice";

const Categories: React.FC = React.memo(() => {
  const { category } = useAppSelector(filterSelector);
  const dispatch = useAppDispatch();

  const onChangeCategory = (id: number) => {
    dispatch(setCategory(id));
  };

  return (
    <div className="categories">
      <ul>
        {categoriesArray.map((cat, index) => (
          <li
            key={index}
            className={category === index ? "active" : ""}
            onClick={() => onChangeCategory(index)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
