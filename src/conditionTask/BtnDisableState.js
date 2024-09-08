import React, { useState } from 'react'

const BtnDisableState = () => {

    const [inputValue ,setInputValue] = useState('');

  return (
    <div>
        <input type="text" 
        placeholder='type.......'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button disabled ={!inputValue}>submit</button>
    </div>
  )
}

export default BtnDisableState