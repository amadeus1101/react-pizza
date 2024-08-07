import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductType } from "../../@types/ProductType";
import { FiltersType } from "../../@types/FiltersType";
import { DATA_URL } from "../../constants";

export const fetchData = createAsyncThunk<ProductType[], FiltersType>(
  "pizza/fetchPizzaStatus",
  async (params) => {
    const { sort, category, search, page } = params;
    const { data } = await axios.get<ProductType[]>(
      DATA_URL +
        `?page=${page}&limit=4${
          category !== 0 ? "&category=" + category : ""
        }&sortby=${sort.sortby.substring(1)}&order=${
          sort.sortby[0] === "-" ? "desc" : "asc"
        }${search ? "&search=" + search : ""}`
    );
    return data;
  }
);
