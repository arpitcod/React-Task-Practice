// **Checkbox Required**: Validate that a "
// Terms and Conditions" checkbox is checked before form submission.

import React, { useState } from 'react'

const CheckboxRequired = () => {
    const [isChecked,setIsChecked] = useState(false);
    const [error,setError] = useState("");

    const handleSubmit = (e) =>{
            e.preventDefault();

            if (!isChecked) {
                setError("you aggred terms and condition")
            }else{
                alert("form submitted")
            }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label>
            <input type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked ,setError("")) }
            />
            i aggre this terms and condition
            </label>
        </div>
        {error && <p className='text-danger'>{error}</p>}
        <button className='btn btn-primary' >Submit</button>
        </form>

    </div>
  )
}

export default CheckboxRequired