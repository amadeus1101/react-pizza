import { filtersType } from "../../@types/filtersType";
import { sortArray } from "../../constants";
import { parseQuery } from "../../utils";

export function setInitialState() {
  const obj = parseQuery(window.location.search);
  if (obj) {
    const sort = sortArray.find((elem) => elem.sortby === obj.sortby);
    const initialState: filtersType = {
      category: obj.category,
      sort: sort ?? sortArray[0],
      page: obj.page,
      search: "",
    };
    return initialState;
  }
  const initialState: filtersType = {
    category: 0,
    sort: sortArray[0],
    page: 1,
    search: "",
  };
  return initialState;
}
