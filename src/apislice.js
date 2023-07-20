import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk("api/fetchProducts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    //console.log(response.data)
    return response.data;
})

const initialState = {
    productDetails: [],
    currentPage: 1,
    productsPerPage: 8,
    searchQuery: "",
    categoryFilter: "",
    searchedProducts: [],
}

const apislice = createSlice({
    name: "api",
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
        setcategoryFilter(state, action) {
            state.categoryFilter = action.payload;
        },
        setSearchedProducts(state, action) {
            state.searchedProducts = action.payload.length;
            console.log(state.searchedProducts, "serached products")
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                console.log("loading start")
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                console.log("success")
                state.productDetails = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                console.log("error")
            });
    },
});

export const { setCurrentPage, setSearchQuery, setcategoryFilter, setSearchedProducts } = apislice.actions;
export default apislice.reducer;