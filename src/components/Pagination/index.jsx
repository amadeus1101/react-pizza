import React, { useState } from "react";

let pages = [1, 2, 3];
const MAXPAGE = 10;

function Pagination() {
  const [activePage, setActivePage] = useState(1);

  const stepBack = () => {
    if (activePage > 1) {
      if (activePage === pages[0]) {
        pages = pages.map((page) => page - 1);
      }
      setActivePage((prev) => prev - 1);
    }
  };
  const stepForward = () => {
    if (activePage < MAXPAGE) {
      if (activePage === pages[2]) {
        pages = pages.map((page) => page + 1);
      }
      setActivePage((prev) => prev + 1);
    }
  };

  return (
    <div className="pagination">
      <ul>
        <li onClick={() => stepBack()}>◀</li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === activePage ? "active" : ""}
            onClick={() => setActivePage(page)}
          >
            {page}
          </li>
        ))}
        <li onClick={() => stepForward()}>▶</li>
      </ul>
    </div>
  );
}

export default Pagination;
