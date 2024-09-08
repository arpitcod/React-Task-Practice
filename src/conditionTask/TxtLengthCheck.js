import React, { useState } from 'react'

const TxtLengthCheck = () => {

    const [inputValue,setInputValue] = useState('');
    const [message,setMessage] = useState('')

    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
      
        if (inputValue.length > 50) {
            return setMessage('minimum 30 character valid')
        }else{
            return setMessage('')
        }
    }
  return (
    <div>
        <textarea cols="20" rows="10" onChange={handleInputChange}></textarea>
        <p className="text-danger">{message}</p>
    </div>
  )
}

export default TxtLengthCheck