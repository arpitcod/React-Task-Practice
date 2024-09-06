// **Number Input**: Ensure a number input only accepts numeric values.
import React, { useState } from 'react'

const NumberInput = () => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
      const inputValue = e.target.value;
      
      // Check if the input value is a number or empty (to allow deletion of the input)
      if (/^\d*$/.test(inputValue)) {
        setValue(inputValue);
      }
    };
  return (
    <div>
    <label htmlFor="numberInput">Enter a number:</label>
    <input
      type="text"
      id="numberInput"
      value={value}
      onChange={handleChange}
      placeholder="Only numbers are allowed"
    />
  </div>
  )
}

export default NumberInput