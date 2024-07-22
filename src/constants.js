const API_URL = "https://63fe15b61626c165a0a7034c.mockapi.io";
const DATA_URL = "https://63fe15b61626c165a0a7034c.mockapi.io/pizzas";
const UTILITIES_URL = "https://63fe15b61626c165a0a7034c.mockapi.io/utilities";

export { API_URL, DATA_URL, UTILITIES_URL };

export const sortArray = [
  { name: "популярности 🔽", sortType: "rating", order: "asc" },
  { name: "популярности 🔼", sortType: "rating", order: "desc" },
  { name: "цене 🔽", sortType: "price", order: "asc" },
  { name: "цене 🔼", sortType: "price", order: "desc" },
  { name: "алфавиту 🔽", sortType: "title", order: "asc" },
  { name: "алфавиту 🔼", sortType: "title", order: "desc" },
];
