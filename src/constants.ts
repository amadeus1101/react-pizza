import { sortType } from "./@types/sortType";

const API_URL = "https://63fe15b61626c165a0a7034c.mockapi.io";
const DATA_URL = "https://63fe15b61626c165a0a7034c.mockapi.io/pizzas";
const UTILITIES_URL = "https://63fe15b61626c165a0a7034c.mockapi.io/utilities";

export { API_URL, DATA_URL, UTILITIES_URL };

export const sortArray: sortType[] = [
  { name: "популярности 🔽", sortby: "rating", order: "asc" },
  { name: "популярности 🔼", sortby: "rating", order: "desc" },
  { name: "цене 🔽", sortby: "price", order: "asc" },
  { name: "цене 🔼", sortby: "price", order: "desc" },
  { name: "алфавиту 🔽", sortby: "title", order: "asc" },
  { name: "алфавиту 🔼", sortby: "title", order: "desc" },
];
