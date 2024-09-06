// **Flash Sale Timer**: Display "Sale Ended" if the sale time has
//  expired, otherwise display the remaining time.
import React, { useEffect, useState } from 'react'

export const SaleTimer = () => {
    const saleEndTime = Date.now() + 20000;
    const [timeRemainning ,setTimeRemaining] = useState(saleEndTime - new Date().getTime());

    // un comment .....................................................................

    // useEffect(() =>{
    //     const timer = setInterval(() => {
    //         const timeLeft = saleEndTime - new Date().getTime();
    //         setTimeRemaining(timeLeft);
    //         console.log("timeleft" ,timeLeft)
    //         console.log("timeremaining" ,timeRemainning)

    //         if (timeLeft <= 0) {
    //            return clearInterval(timer)
    //         }
    //     }, 1000);
    //     // return () => clearInterval(timer)
    // },[])
    
  return (
    <div>
            {
                timeRemainning <= 0 ? (
                    <h1>sale ended</h1>
                ) :(
                    <span>Time Remaining: {Math.floor(timeRemainning / 1000)} seconds</span>
                )
            }
    </div>
  )
}
