import React, { useState } from "react";

function Categories({ categories }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const onClickCategory = (category) => {
    setActiveCategory(category);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className={+category.id === activeCategory ? "active" : ""}
            onClick={() => onClickCategory(+category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
