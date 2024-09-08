import React, { useState } from 'react'

const Conditionalicon = () => {
    const [isLike ,setIslike] = useState(false);
  return (
    <div>
        <button onClick={() => setIslike(!isLike)}> {isLike ? '⭐' : '❤️'}</button>
        <p>{isLike ? "not like" :  "i like "}</p>
    </div>
  )
}

export default Conditionalicon