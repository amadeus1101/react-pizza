import { QueryType } from "../@types/QueryType";
import { sortArray } from "../constants";

export function parseQuery(query: string) {
  const args = query
    .substring(1)
    .split("&")
    .map((elem) => elem.split("="))
    .map((elem) => elem[1]);
  const sortby = args[2] === "asc" ? "+" + args[1] : "-" + args[1];
  const obj: QueryType = {
    category: Number(args[0]),
    sortby: sortby,
    name: sortArray.find((elem) => elem.sortby === sortby)?.name || "undefined",
    page: Number(args[3]),
  };
  return obj;
}
