import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name:"todolist",
    initialState:{
        todo:[]
    },  


    reducers:{

        setTodo:(state,action) =>{
            state.todo.push(action.payload)
        },

        removeTask:(state,action) =>{
            state.todo = state.todo.filter(todos => todos.id !== action.payload)
        }
    }
})

export const {setTodo,removeTask} = todoSlice.actions;

export default todoSlice.reducer;