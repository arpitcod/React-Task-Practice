import React, { useState } from 'react'

const LoginStatus = () => {
    const [isLogin ,setIslogin] = useState(false);

    const handleLoginCheck = () =>{
        setIslogin(!isLogin)
        console.log(isLogin)
    }
  return (
    <div className='text-center mt-5'>
        <button type="button" className={`btn btn-${isLogin ? "secondary" : "primary"}`} onClick={handleLoginCheck}>{isLogin ? "Logout" : "Login"}</button>
    </div>
  )
}

export default LoginStatus