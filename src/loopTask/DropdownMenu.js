// 4. **Render a Dropdown**: Create a dropdown menu from an array of options.
import React from 'react'

const DropdownMenu = () => {
    const options = ['Apple', 'Banana', 'Orange', 'Grapes'];

  return (
    <div>
        <select>
            {
                options?.map((option,index) =>(
                    <option value={index} key="">{option}</option>
                ))
            }
        </select>
    </div>
  )
}

export default DropdownMenu