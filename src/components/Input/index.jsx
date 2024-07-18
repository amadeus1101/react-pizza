import React, { useState } from "react";

function Input() {
  const [searchValue, setSearchValue] = useState("");
  const onChangeInput = (query) => {
    setSearchValue(query);
  };
  return (
    <div className="search_input">
      <input
        type="text"
        placeholder="Поиск пиццы..."
        onChange={(e) => onChangeInput(e.target.value)}
        value={searchValue}
      />
    </div>
  );
}

export default Input;
