// **Form Submission**: Show a "Submitting..." message if the form is
//  being submitted, otherwise show the form.
import React, { useState } from "react";

const FormSubmission = () => {
  const [formSubmit, setFormSubmit] = useState(false);
//   const [alert, setAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmit(true);
    // setAlert(true);

    setTimeout(() => {
      setFormSubmit(false);
      alert("Form submitted")
    //   setAlert(true);
      
    }, 1000);

  };
  return (
    <div>
      {/* {alert ? (
        <div className="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
      ) : false} */}
      {formSubmit ? (
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              required
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FormSubmission;
