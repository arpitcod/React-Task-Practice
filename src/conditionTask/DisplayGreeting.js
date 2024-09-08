import React, { useEffect, useState } from 'react'

const DisplayGreeting = () => {

    const [time,setTime] = useState(new Date().getHours());

    

    useEffect(() =>{

        // const currentTime = new Date().getHours()
    
        if (time < 12) {
            return setTime("good morning")
        }else if (time < 16) {
            return setTime("good after noon")
        }else{
            return setTime("good evenining")
        }

    },[])


    
  return (
    <div>
       <h1>{time}</h1>
    </div>
  )
}

export default DisplayGreeting