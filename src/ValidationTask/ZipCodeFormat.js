// **ZIP Code Format**: Ensure a ZIP code input is in the correct format (e.g., 12345 or 12345-6789).
import React, { useState } from 'react'

const ZipCodeFormat = () => {
    const [zipCOde,setZipCode] = useState('');
    const [error ,setError] = useState('');

    const hanldeOnChange = (e) =>{
        const input = e.target.value;

        setZipCode(input);

        const zipRex = /^\d{5}(-\d{4})?$/;

        if (zipRex.test(input)) {
            setError("")
        } else {
            setError("invalid zipcode")
        }
    }


  return (
    <div>
        <input type="text" 
        onChange={hanldeOnChange}
        placeholder='zipcode...'
        value={zipCOde}
        
        />

        {error && <p className='text-danger'>{error}</p>}
    </div>
  )
}

export default ZipCodeFormat