// **Filter List by Text Input:**
//    - Create a filter that updates a list based on text input.

import React, { useState } from 'react'

const FilterTxtInput = () => {
    const [searchItm ,setSearchItm] = useState("");

    const items = ['arpit','krishna','kesav','appu','narayan'];

    const handleOnchange = (e) =>{
        setSearchItm(e.target.value);


    }
    const filteredItm = items.filter((item) =>(
        item.toLowerCase().includes(searchItm.toLowerCase())
    )) 
  return (
    <div>
        <input type="text" 
            placeholder='search items'
            value={searchItm}
            onChange={handleOnchange}
        />

        <div>
            {
                filteredItm?.map((itm ,index) =>(
                    <div key={index}>
                        <li>{itm}</li>
                    </div>

                ))
            }
        </div>
    </div>
  )
}

export default FilterTxtInput