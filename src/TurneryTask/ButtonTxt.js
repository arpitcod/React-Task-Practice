import React, { useState } from 'react'

const ButtonTxt = () => {
    const [isSubscribe ,setisSubscribe] = useState(false);

    const handleSubscribe = () =>{
        setisSubscribe(!isSubscribe)
    }
  return (
    <div className='text-center mt-5'>
        <button type="button" class={`btn btn-${isSubscribe ? "secondary" : "danger"}`} onClick={handleSubscribe}>{isSubscribe? "UnSubscribe" : "Subscribe"}</button>
    </div>
  )
}

export default ButtonTxt