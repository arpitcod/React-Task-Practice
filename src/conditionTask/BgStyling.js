import React, { useState } from 'react'

const BgStyling = () => {
const [bgColor,setBgColor] = useState(false);
    const mainContainer ={
        backgroundColor: bgColor ? "red" : "green",
        width:"200px",
        height:"200px"
    }

    // const handleBgColorChange = () =>{

    //     setBgColor(!bgColor);
    // }
  return (
    <div style={mainContainer}>
        <h1>hare krishna</h1>

        <button onClick={() => setBgColor(!bgColor)}>Change color</button>
    </div>
  )
}

export default BgStyling