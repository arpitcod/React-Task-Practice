import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../ReduxTask/BasicSetup'
import counterAppReducer from './CounterApp/CounterSlice';
import themeReducer from './ThemeDarkLight/ThemeSlice'
import authReducer from './LoginStatus/AuthSlice'
import userReducer from './UserName/UserNameSlice'
import todoReducer from './TodoList/TodoListSlice'
const store = configureStore({

    reducer:{
        counter : counterReducer,
        counterapp : counterAppReducer,
        themeApp : themeReducer,
        authStatus: authReducer,
        UserName: userReducer,
        todoList : todoReducer
    }
})


export default store;