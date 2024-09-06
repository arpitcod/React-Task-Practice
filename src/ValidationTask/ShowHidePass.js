import React, { useState } from "react";

const ShowHidePass = () => {
    const [password ,setPassword] = useState("")
    const [showPass ,setShowPass] = useState(false);

    const handleShowPass = () =>{
        setShowPass(!showPass);
    }
  return (
    <div>
      <div className="form-floating">
        <input
          type={`${showPass ? "text" : "password"}`}
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={(e) =>setPassword(e.target.value)}
          value={password}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className="btn btn-primary mt-4" onClick={handleShowPass}>{showPass ? "Hide" : "Show"}</button>
    </div>
  );
};

export default ShowHidePass;
