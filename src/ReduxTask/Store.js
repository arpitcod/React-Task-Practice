import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../ReduxTask/BasicSetup'
import counterAppReducer from './CounterApp/CounterSlice';
import themeReducer from './ThemeDarkLight/ThemeSlice'

const store = configureStore({

    reducer:{
        counter : counterReducer,
        counterapp : counterAppReducer,
        themeApp : themeReducer
    }
})


export default store;