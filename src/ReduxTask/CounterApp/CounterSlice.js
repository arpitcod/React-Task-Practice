import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({

    name:"counterapp",
    initialState:{
        increase:0
    },


    reducers:{

        setIncrease : (state,action) =>{
            state.increase = action.payload 
        }
    }


})

export  const {setIncrease,increase} = counterSlice.actions;

export default counterSlice.reducer;