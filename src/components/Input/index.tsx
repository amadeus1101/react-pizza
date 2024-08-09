import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../redux/store";

import { setSearch } from "../../redux/filters/slice";

import search_icon from "../../assets/img/search.png";
import close_icon from "../../assets/img/close.png";

const Input: React.FC = React.memo(() => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const onChangeInput = (query: string) => {
    setSearchValue(query);
  };
  const onClearInput = () => {
    setSearchValue("");
    if (inputRef.current) inputRef.current.focus();
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearch(searchValue));
    }, 500);
    return () => clearTimeout(timer);
  }, [searchValue]);
  return (
    <div className="search_input">
      <div className="search-icon">
        <img src={search_icon} alt="search-icon" />
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Поиск пиццы..."
        onChange={(e) => onChangeInput(e.target.value)}
        value={searchValue}
      />
      {searchValue.length > 0 && (
        <div className="close-icon" onClick={onClearInput}>
          <img src={close_icon} alt="close-icon" />
        </div>
      )}
    </div>
  );
});

export default Input;
