import React, { useState } from 'react'

const ShowHideElement = () => {
    const [showPass ,setShowPass] = useState(false)
  return (
    <div className='d-flex flex-column w-50'>
        <input type= {showPass ? "text" : "password" } 
        placeholder='type.......'
   
    />
    <label>
    <input type="checkbox"
    checked={showPass}
    onChange={() => setShowPass(!showPass)}
    
    />
    <p>Show password</p>

    </label>
    <button>submit</button>
</div>
  )
}

export default ShowHideElement