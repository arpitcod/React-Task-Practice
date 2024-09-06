import React, { useState } from "react";

const SignUp = () => {
const [email ,setEmail] = useState("")
const [isSignedUp ,setIsSignedUp] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsSignedUp(true)
    }
  return (
    <div>
        {
                isSignedUp ? (
                    <h1>your SignUp successfully....</h1>
                ) : (

      <form className="d-flex flex-column gap-3 align-items-start" onSubmit={handleSubmit}>
        <input type="email" 
        placeholder="email.."
        onChange={(e) =>setEmail(e.target.value)}
        value={email}
        required
        />
        <button className="btn btn-primary" type="submit">
          submit
        </button>
      </form>
                )

        }
    </div>
  );
};

export default SignUp;
