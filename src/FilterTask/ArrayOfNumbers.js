// **Filter Array of Numbers:** - Implement a filter that only shows even or odd numbers from an array.


import React, { useState } from 'react'

const ArrayOfNumbers = () => {

    const [filterType ,setFilterType] = useState('all');
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


    const filteredNum = numbers.filter((number) =>{
                if(filterType === 'even') {
                    return number % 2 === 0 ;
                }else if (filterType === 'odd') {
                    return number % 2 === 1
                }else{
                    return filterType === 'all'
                }
})

  return (
    <div>
        <label>Filter:</label>
        <select onChange={(e) => setFilterType(e.target.value)} value={filterType}>
            <option value={'all'} >All</option>
            <option value={'even'} >Even</option>
            <option value={'odd'} >Odd</option>
        </select>

        <div>
            <ul>
                {
                    filteredNum.map((itm,index) =>(
                        <div key={index}>
                            <li>{itm}</li>
                        </div>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default ArrayOfNumbers