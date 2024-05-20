import { createSlice } from "@reduxjs/toolkit";

/**
 *  createSlice({
 *      name: '',
 *      initialState: '',
 *      reducers: '',
 *      extraReducers: ''
 * });
 * 
 */
const productsSlice = createSlice({
    name: 'productList',
    initialState: [],
    reducers: (state, action) => {

    }
});

export default productsSlice;