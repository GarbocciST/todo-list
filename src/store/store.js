import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todos";

const localStorageMiddleware = ({ getState }) => {
    return next => action => {
      const result = next(action);
      sessionStorage.setItem('applicationState', JSON.stringify(getState()));
      return result;
    };
  };

const reHydrateStore = () => {
    if (sessionStorage.getItem('applicationState') !== null) {
        return JSON.parse(sessionStorage.getItem('applicationState')); // re-hydrate the store
    }
};

export const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});