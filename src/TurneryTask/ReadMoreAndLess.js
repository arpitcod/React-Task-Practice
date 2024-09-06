//  **Read More/Read Less**: Show "Read More" if 
// the text is truncated, otherwise show "Read Less."

import React, { useState } from 'react'

const ReadMoreAndLess = () => {
    const text = "loremloremloremloreloremloremloremloreloremloremloremloreloremloremloremlore";
    // const maxLength = 50;

    const [readTxt,setReadTxt] = useState(false);

const handleReadAndLess = () =>{
    setReadTxt(!readTxt);
}
  return (
    // <div  style={{height:"100px"}}>
    //    <p>{text.length > 50 ? text.slice(0,20) + "..." : text}</p>

    //    <button className='btn btn-primary' onClick={handleReadAndLess}>{`${readTxt ? "Read less" : "Read more"}`}</button>
    // </div>

    <div className='w-50 '>
        <h3>
            {
                readTxt ? text : text.slice(0,20) + "..." 
            }
        </h3>

        <button className='btn btn-primary' onClick={handleReadAndLess}>{readTxt ? "Read less" :"Read more"}</button>
    </div>
  )
}

export default ReadMoreAndLess