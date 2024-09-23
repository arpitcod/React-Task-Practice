import { createSlice } from "@reduxjs/toolkit";




const authStatus = createSlice({
    name:'auth',
    initialState:{
        user:null,
        isLoggedIn:false,
    },

    reducers:{

        login : (state,action) =>{
            state.isLoggedIn = true
            state.user = action.payload
        },

        logout:(state,action) =>{
            state.isLoggedIn = false
            state.user = null
        }
    }
})


export const {setAuthStatus,login,logout} = authStatus.actions

export default authStatus.reducer;