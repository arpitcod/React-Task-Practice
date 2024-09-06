// . **Modal Visibility**: Display the modal if it's open, otherwise hide it.
import React, { useState } from 'react'

const ModelShow = () => {
    const [isOpen,setIsOpen] = useState(false);

    const handleShowModel = () =>{
        setIsOpen(!isOpen)
    }

    const style ={
        model:{
            height:"300px",
            width:"300px",
    
         
        },
        mainContainer:{
            border:"1px solid black",
            height:"500px",
            

        }
    }
  return (
    <div style={style.mainContainer}>
        <button className='btn btn-primary' onClick={handleShowModel}>{isOpen ? "Hide model" : "Show model"}</button>
{
    isOpen ?(
        <div className='border border-danger d-flex align-items-center justify-content-center' style={style.model}>
            <h1>hare krishna</h1>
        </div>
    ) : (null)
}
    </div>
  )
}

export default ModelShow