import React, { useState } from 'react'
import {setTodo,removeTask} from './TodoListSlice'
import { useDispatch, useSelector } from 'react-redux'
const MainTodoList = () => {

    const todoList = useSelector(state => state.todoList.todo);
    
    const [todos,setTodos ] = useState([])

    const dispatch = useDispatch()

    const handleOnAdd = (e) =>{

        e.preventDefault()

        dispatch(setTodo({id:Date.now(),todos}))
            setTodos('')
           
            
    }

    const hanldeRemove = (id) =>{
            // dispatch(removeTask())
            console.log('index',id);
            
            dispatch(removeTask(id))
            console.log('todolist',todoList);
            console.log('remoe task',removeTask);
            
            
    }
  return (
    <div>
        <form>
            <input type="text"
            placeholder='enter task..'
            value={todos}
            onChange={(e) => setTodos(e.target.value)}
            />

            <button className='btn btn-primary' onClick={handleOnAdd}>Add</button>
        </form>

        <div>
            {
                todoList?.map((todo,index) =>(

                    <div className='border d-flex justify-content-between px-3 my-3'>
                        <h1>{todo.todos}</h1>
                        <button className='btn btn-danger' onClick={()=>hanldeRemove(todo.id)}>Remove</button>
                    </div>

                ))
            }
        </div>
    </div>
  )
}

export default MainTodoList