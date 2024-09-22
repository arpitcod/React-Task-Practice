import { createSlice } from "@reduxjs/toolkit";



const themeSLice = createSlice({
    name:"themeApp",
    initialState:{
        theme:"light"
    },

    reducers:{

        setTheme:(state,action) =>{
            state.theme = state.theme === "light" ? "dark" : "light"
        }
    }
})

export const {setTheme} = themeSLice.actions;

export default themeSLice.reducer;