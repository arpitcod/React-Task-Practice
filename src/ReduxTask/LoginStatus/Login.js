import React from 'react'
import {login,logout} from './AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
const Login = () => {

const dispatch = useDispatch();

const isLoggedIn = useSelector(state => state.authStatus.isLoggedIn) //state + store reducer name + inistal state name
    const handleLogin = () =>{

        // const user = {name:"demo"}

        dispatch(login({name:"krishna",email:"krishna@krishna.com"}))
    }

const handleLogout = () =>{
    dispatch(logout())
}
    
    
  return (
    <div>
        {
            isLoggedIn ? (
                <button className='btn btn-danger' onClick={handleLogout}>logout</button>
            ) :(
                <button className='btn btn-primary' onClick={handleLogin}>login</button>
            )
        }
       
    </div>
  )
}

export default Login