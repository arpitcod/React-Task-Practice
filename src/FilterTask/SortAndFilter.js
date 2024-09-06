// 7. **Sort and Filter List:**  - Create a list that 
// can be filtered by text input and sorted alphabetically.
import React, { useState } from 'react'

const SortAndFilter = () => {

    const [items] = useState(["Apple", "Orange", "Banana", "Grapes", "Peach"]);
    const [searchItm ,setSearchItm] = useState('');


    const filteredData = items.filter(item =>(
        item.toLowerCase().includes(searchItm.toLowerCase())
    )).sort()
  return (
    <div>
        <input type="text" 
        placeholder='search...'
        value={searchItm}
        onChange={(e) => setSearchItm(e.target.value)}

        />

        <div>
            <ul>
                {
                    filteredData.map(item =>(
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default SortAndFilter