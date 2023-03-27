import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const CategorySlice = createSlice({
    name:"category",
    initialState:"",
    reducers:{
        addCategory:(state,action)=>  action.payload, 
        resetCategory:(state)=>  state="", 
    }
})

export const {addCategory,resetCategory} = CategorySlice.actions;

export const selectCategory = (state:RootState) => state.category;
 
export default CategorySlice.reducer;