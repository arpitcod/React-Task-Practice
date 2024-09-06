import React, { useState } from 'react'

const PasswordLength = () => {
    const [passLength ,setPassLength] = useState('');
    const [errorMsg ,setErroeMsg] = useState('');


    const handleOnSubmit = (e) =>{
            e.preventDefault()
            if (passLength.length === 0) {
                setErroeMsg("required field")
            } else if(passLength.length < 8 ){
                setErroeMsg("password max 8 character")
            }else{
                alert("data submitted")
            }
    }
  return (
    <div>
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>
          Password:
          <input
            type="password"
                value={passLength}
                onChange={(e) => setPassLength(e.target.value, setErroeMsg(''))}
                placeholder="Enter your password"
          />
          <p className='text-danger'>{errorMsg}</p>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default PasswordLength