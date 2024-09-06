import React, { useState } from "react";

const ToggleBtnColor = () => {
  const [isActive, setIsactive] = useState(false);

  const handleTogggle = () =>{
     setIsactive(!isActive)
  }
  return (
    <div>
      <button className={`btn btn-${isActive? "success" :"secondary"}`} onClick={handleTogggle}>
        {isActive ? "Active" : "UnActive"}
      </button>
    </div>
  );
};

export default ToggleBtnColor;
