import React, { useEffect, useState } from 'react'

const AgeVerification = () => {
    const [isAGe ,setIsAge] = useState(15);
    const [message,setMessage] = useState('');


    const handleCheckAge = () =>{

        if (isAGe < 18) {
            return setMessage("you are not 18+")
        }else{
            return setMessage('you are 18+')
        }
    }



  return (
    <div>

        <input type="number" 
        onChange={(e) => setIsAge(e.target.value,setMessage(''))}
        value={isAGe}
        />
        <p className={`${isAGe < 18 ? "text-danger" : "text-success"}`}>{message}</p>
       
       <button onClick={handleCheckAge} className='btn btn-primary'>Verify Age</button>
    </div>
  )
}

export default AgeVerification