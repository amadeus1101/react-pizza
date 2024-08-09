import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from "../../@types/productType";
import { filtersType } from "../../@types/filtersType";
import { DATA_URL } from "../../constants";

export const fetchData = createAsyncThunk<productType[], filtersType>(
  "pizza/fetchPizzaStatus",
  async (params) => {
    const { sort, category, search, page } = params;
    const { data } = await axios.get<productType[]>(
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
