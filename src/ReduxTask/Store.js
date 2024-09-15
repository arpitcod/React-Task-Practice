import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../ReduxTask/BasicSetup'

const store = configureStore({

    reducer:{
        counter : counterReducer
    }
})


export default store;