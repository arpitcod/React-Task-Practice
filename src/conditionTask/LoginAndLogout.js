import React, { useState } from 'react'

const LoginAndLogout = () => {

    const [isLogin ,setIsLogin] = useState(false);
  return (
    <div>
        <button onClick={() =>setIsLogin(!isLogin)}>{isLogin ? "Logout" : "Login"}</button>
    </div>
  )
}

export default LoginAndLogout