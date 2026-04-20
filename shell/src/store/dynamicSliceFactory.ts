import { createSlice } from "@reduxjs/toolkit";

// Create a dynamic slice with Redux Toolkit
const createDynamicSlice = (sliceName: string, initialState: any, reducers: any) => {
  return createSlice({
    name: sliceName,
    initialState,
    reducers,
  });
};

export default createDynamicSlice;
