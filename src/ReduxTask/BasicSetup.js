import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({

    name:"counter",
    initialState:[null],


    reducers:{
        increase :(state) =>{
            state.values = state.values + 1
        },

        decrease:(state) =>{
            state.values = state.values - 1
        },

        increaseByAmount: (state,action) =>{
            state.values = state.values + action.payload
        }

    }


})

export const {increase,decrease,increaseByAmount} = counterSlice.actions;

export default counterSlice.reducer;