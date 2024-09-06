// **Required Field**: Validate that a text input
//  is not empty before submitting a form.
import React, { useState } from "react";

const RequiredField = () => {
  const [inputValue, setInputValue] = useState('');
  const [erroeMsg ,setErroeMsg] = useState("");

  

  
  const handleSubmit = (e) =>{

    e.preventDefault()
      
      if (inputValue?.length === 0) {
           setErroeMsg("Required field")
      }else{

          alert("data submitted")
      }
  }
  return (
    <div>
      <form>
        <div>
          <label>name</label>
          <input type="text"
            placeholder="enter value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value ,setErroeMsg(""))}
            />
            <p className="text-danger">{erroeMsg}</p>
        </div>
        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
};

export default RequiredField;
