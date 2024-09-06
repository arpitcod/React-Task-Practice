// **Confirm Password**: Check that the "Confirm Password"
//  field matches the "Password" field.
import { configure } from '@testing-library/react';
import React, { useState } from 'react'
import PasswordLength from './PasswordLength';

const ConfirmPass = () => {
    const [password,setPAssword] = useState("");
    const [confirmPss ,setConfirmPass] = useState("")
    const [errorMsg ,setErrorMsg] = useState('')

    const hanldeSubmit = (e) =>{
        e.preventDefault();
        if (password.length === 0 || confirmPss.length === 0) {
           setErrorMsg("required field")
        }else if(password.length < 8 || confirmPss.length < 8){
            setErrorMsg("passord max 8 character up")
        }else if(password !== confirmPss){
            setErrorMsg("password not match")
        }else{
            alert("data submitted")
        }

    }
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <div>
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPAssword(e.target.value ,setErrorMsg(""))}
            placeholder="Enter your password"
            value={password}
          />
           <p className='text-danger fw-semibold'>{errorMsg}</p>
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
           onChange={(e) => setConfirmPass(e.target.value,setErrorMsg(""))}
            placeholder="Confirm your password"
            value={confirmPss}
          />

          <p className='text-danger fw-semibold'>{errorMsg}</p>
        </div>
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default ConfirmPass