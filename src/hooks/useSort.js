import { useState } from "react";

export function useSort() {
  const [isSortOpened, setSortOpened] = useState(false);
  const [sortMode, setSortMode] = useState(0);

  const openSortPopup = () => {
    if (!isSortOpened) setSortOpened(true);
    else setSortOpened(false);
  };

  const closeSortPopup = (mode = -1) => {
    if (sortMode !== mode && mode !== -1) {
      setSortMode(mode);
    }
    setSortOpened(false);
  };

  return { isSortOpened, sortMode, openSortPopup, closeSortPopup };
}
