import React, { useState } from 'react'

const Weather = () => {
    const [Weather ,setWeathor] = useState("sunny");
  return (
    <div>
        <h1 className='text-center'>{Weather === "sunny" ? "weather is sunny" :"weather is cloudy"}</h1>
    </div>
  )
}

export default Weather