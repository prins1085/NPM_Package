import _ from "lodash";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../../api/auth";
import { configureStore } from "@reduxjs/toolkit";
import authReducer, { authSlice } from "../slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authApi.middleware),
});

setupListeners(store.dispatch);

const createActions = (slice: any) =>
  _.mapValues(
    slice.actions,
    (actionCreator: any) => (payload: any) =>
      store.dispatch(actionCreator(payload))
  );

export const actions: any = {
  auth: createActions(authSlice),
};

export default store;
