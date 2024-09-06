// 6. **Filter by Range:**- Implement a filter that
//  allows users to filter numbers within a specific range.
import React, { useState } from 'react'

const FilterByRange = () => {

    const [numbers,setNumbers] = useState([10, 25, 35, 40, 55, 60, 75, 85, 90]);
    const [minValue,setMinValue] = useState(0);
    const [maxValue,setMaxValue] = useState(100);


    const filteredData = numbers.filter(number =>{
        // return number >= minValue && number <= maxValue;
        return number >= minValue && number <= maxValue
    })
  return (
    <div>
        <label>
            min number :
            <input type="number" 
            value={minValue}
            onChange={(e) =>setMinValue(e.target.value) }
            />
        </label>
        <label>
            max number :
            <input type="number" 
            value={maxValue}
            onChange={(e) =>setMaxValue(e.target.value) }
            />
        </label>

        <div>
            <ul>
                {
                    filteredData.map(number =>(
                        <li>{number}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default FilterByRange