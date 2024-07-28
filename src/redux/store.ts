import { configureStore } from "@reduxjs/toolkit";
import product from "./product/slice";
import filters from "./filters/slice";
import cart from "./cart/slice";

export const store = configureStore({
  reducer: {
    product,
    filters,
    cart,
  },
});

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
//export const useAppDispatch = () => useDispatch<AppDispatch>();
