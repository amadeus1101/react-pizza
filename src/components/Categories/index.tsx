import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../redux/slices/filterSlice";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC = () => {
  const categoryId = useSelector((state: any) => state.filter.category);
  const dispatch = useDispatch();

  const onChangeCategory = (id: number) => {
    dispatch(setCategory(id));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={categoryId === index ? "active" : ""}
            onClick={() => onChangeCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
