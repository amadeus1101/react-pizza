import React, { useState } from "react";

function Categories() {
  const categoryArray = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeCategory, setActiveCategory] = useState(0);

  const onClickCategory = (category) => {
    setActiveCategory(category);
  };
  return (
    <div className="categories">
      <ul>
        {categoryArray.map((category, index) => (
          <li
            className={activeCategory === index ? "active" : ""}
            onClick={() => onClickCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
