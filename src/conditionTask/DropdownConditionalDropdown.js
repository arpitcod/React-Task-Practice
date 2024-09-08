import React, { useState } from 'react'

const DropdownConditionalDropdown = () => {
    const [selectedOption, setSelectedOption] = useState('');


  return (
    <div>
        <label>select option</label>
        <select onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
            <option value={'nofield'} key="">nofield</option>
            <option value={'showvalue'} key="">show field</option>
        </select>

        <div>
            {
                selectedOption === "showvalue" && (
                    <input type="text" 
                    placeholder='type...'
                    />
                )
            }
        </div>
  </div>
  )
}

export default DropdownConditionalDropdown