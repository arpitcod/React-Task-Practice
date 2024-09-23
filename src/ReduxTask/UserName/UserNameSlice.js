import { createSlice } from "@reduxjs/toolkit";



const usernameSlice = createSlice({
    name:"user",
    initialState:{
        username:[]
    },


    reducers:{
        setUserName: (state,action) =>{
            state.username.push(action.payload)
        }
    }
})


export const {setUserName} = usernameSlice.actions;

export default usernameSlice.reducer;