import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducers } from "./rootReducer";

const emptyReducer = () => ({});

const store = configureStore({
  reducer: combineReducers(reducers),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const addDynamicSlice = (sliceName: string, slice: { reducer: (state: RootState, action: unknown) => unknown }) => {
  if (!reducers[sliceName]) {
    reducers[sliceName] = slice.reducer;
    store.replaceReducer(combineReducers(reducers));
  }
};

const removeDynamicSlice = (sliceName: string) => {
  if (reducers[sliceName]) {
    store.dispatch({ type: `${sliceName}/resetDTO` });
    delete reducers[sliceName];
    const newReducers = Object.keys(reducers).length > 0 ? reducers : { _empty: emptyReducer };
    store.replaceReducer(combineReducers(newReducers));
  }
};

export { store, addDynamicSlice, removeDynamicSlice };