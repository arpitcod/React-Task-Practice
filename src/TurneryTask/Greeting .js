// // To display a greeting message in React based on the current time, you can use
//  a component with state and lifecycle methods. Here’s how you can do it:
import React from "react";

const Greeting = () => {
  const hours = new Date().getHours();
 

  return (
    <div>
      <div className="text-center mt-5">
        <h1>{`${hours < 12 ? "Good morning" : " Good after noon"}`}</h1>
        
      </div>
    </div>
  );
};

export default Greeting;
