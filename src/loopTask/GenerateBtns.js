// 6. **Generate Buttons**: Create multiple buttons dynamically based on an array of labels.

import React from 'react'

const GenerateBtns = () => {
    const labels = ['Save', 'Delete', 'Update', 'Cancel'];
  return (
    <div>
        {
            labels?.map((label,index) =>(
                <button onClick={()=> alert(`alrt ${label} selected`)}>{`alert this is ${label}`}</button>
            ))
        }
    </div>
  )
}

export default GenerateBtns