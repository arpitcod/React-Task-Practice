//  **Minimum Age**: Validate that a user's 
//  age is above 18 years by checking a date of birth input.
import React, { useState } from 'react'

const MinimunAge = () => {
    const [dob,setDob] = useState("");
    const [error,setError] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        const birthDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();

        console.log(age);
        
        
        // if (age < 18 || (age ===18 && today < new Date(birthDate.setFullYear(birthDate.getFullYear()+18)) )) {
        if (age < 18 ){
            setError("you are not 18+")
        }else{
            alert("form submitted")
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Date of birth:</label>
            <input type="date" 
            value={dob}
            onChange={(e) => setDob(e.target.value) + setError("")}
            />
            {error && <p className='text-danger'>{error}</p>}
            <button className='btn btn-primary' type='submit'>submit</button>
        </form>
    </div>
  )
}

export default MinimunAge