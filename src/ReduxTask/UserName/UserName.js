import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setUserName} from './UserNameSlice'

const UserName = () => {
    const [name,setName] = useState('')

    const userData = useSelector((state) => state.UserName.username)
    
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()

        // if (userData.length < 0 ?) {
            
        // }

        // if (name.trim()) {
            
            dispatch(setUserName(name))
            setName('')
        // }

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='enter name'
            
            />

            <button type='submit' className='btn btn-primary'>submit</button>
        </form>

        <div>
           {

            userData.length === 0 ?(

                <h1>no user data</h1>
            ) : (
    

                userData?.map(user =>(

                    <h1>{user}</h1>
                ))
            )
           
           }
        </div>
    </div>
  )
}

export default UserName