import { SortType } from "./@types/SortType";

export const API_URL = "https://63fe15b61626c165a0a7034c.mockapi.io";
export const DATA_URL = "https://63fe15b61626c165a0a7034c.mockapi.io/pizzas";
export const UTILITIES_URL =
  "https://63fe15b61626c165a0a7034c.mockapi.io/utilities";

export const sortArray: SortType[] = [
  { name: "популярности 🔽", sortby: "rating", order: "asc" },
  { name: "популярности 🔼", sortby: "rating", order: "desc" },
  { name: "цене 🔽", sortby: "price", order: "asc" },
  { name: "цене 🔼", sortby: "price", order: "desc" },
  { name: "алфавиту 🔽", sortby: "title", order: "asc" },
  { name: "алфавиту 🔼", sortby: "title", order: "desc" },
];

export const categoriesArray = [
  "Все",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const Itemtypes = ["тонкое", "традиционное"];
