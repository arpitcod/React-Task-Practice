import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({

    name:"counter",
    initialState:{
        increase:0,
        // decrease:0
    },


    reducers:{
        setIncrease :(state ,action) =>{
            // state.increase = state.increase + 1
            state.increase = action.payload
            // state.count++
        },

        setDecrease:(state,action) =>{
            state.increase = action.payload
        },

        increaseByAmount: (state,action) =>{
            state.value = state.values + action.payload
        }

    }


})

export const {decrease,increaseByAmount,setIncrease,increase,setDecrease} = counterSlice.actions;

// export const increase = ()

export default counterSlice.reducer;