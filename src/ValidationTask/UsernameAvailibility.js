// **Username Availability**: Check if a username is available (simulated check).

import React, { useState } from 'react'

const UsernameAvailibility = () => {
    const [username ,setUsername] = useState("");
    const [message,setMessage] = useState("");


    const userNames = ['arpit','kesav','krishna','appu'];

    const handleOnchange = (e) =>{

        const input = e.target.value;

        setUsername(input);
        if (input) {
            const isTaken = userNames.includes(input.toLowerCase());
            setMessage(isTaken ? "username is taken" :"username is available")

        } else {
            setMessage("")
        }

    }
  return (
    <div>
        {/* <form> */}
            <div>
                <input type="text" 
                value={username}
                onChange={handleOnchange}
                placeholder='enter username'
                />
                <p className={username ? "text-success" :"text-danger"}>{message}</p>
            </div>
        {/* </form> */}
    </div>
  )
}

export default UsernameAvailibility