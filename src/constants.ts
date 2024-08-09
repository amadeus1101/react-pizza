import { sortType } from "./@types/sortType";

export const API_URL = "https://63fe15b61626c165a0a7034c.mockapi.io";
export const DATA_URL = "https://63fe15b61626c165a0a7034c.mockapi.io/pizzas";
export const UTILITIES_URL =
  "https://63fe15b61626c165a0a7034c.mockapi.io/utilities";

export const sortArray: sortType[] = [
  { name: "популярности 🔽", sortby: "+rating" },
  { name: "популярности 🔼", sortby: "-rating" },
  { name: "цене 🔽", sortby: "+price" },
  { name: "цене 🔼", sortby: "-price" },
  { name: "алфавиту 🔽", sortby: "+title" },
  { name: "алфавиту 🔼", sortby: "-title" },
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
