import axios from "axios";
import { DATA_URL } from "../constants";

export function fetchData(category, sortby, order, page, limit, query) {
  const response = axios.get(DATA_URL);
  return response;
}
