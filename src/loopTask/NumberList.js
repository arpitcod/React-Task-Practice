import React from 'react'

const NumberList = () => {

    const numbers = [1,2,3,4,5,6,7,8,9,10,11]
  return (
    <div>
        <ul>
            {
                numbers?.map(number => (
                    <li>{number}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default NumberList