import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "../store";


 
interface MyState {
    items: string[];
  }
  
  const initialState: MyState = {
    items: [],
  };

const ImageGalarySlice = createSlice({
    name:"galary",
    initialState,
    reducers:{
        addImages:(state, action: PayloadAction<any>)=>{
            state.items.push(action.payload);
        },
        resetGalary:(state)=>{
            state.items = [];
        },
    }
    
});

export const {addImages,resetGalary} = ImageGalarySlice.actions;

export const selectGalary = (state:RootState)=>state?.galary?.items;

export default ImageGalarySlice.reducer;