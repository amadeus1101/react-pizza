import React, { useState } from "react";

function Sort({
  sorting,
  sortMode,
  isSortOpened,
  openSortPopup,
  closeSortPopup,
}) {
  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={openSortPopup}>{sorting[sortMode].name}</span>
      </div>
      {isSortOpened && (
        <div className="sort__popup">
          <ul>
            {sorting.map((obj) => (
              <li
                key={obj.id}
                className={sortMode === obj.id ? "active" : ""}
                onClick={() => closeSortPopup(obj.id)}
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
