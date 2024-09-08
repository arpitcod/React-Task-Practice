import React, { useState } from 'react'

const ToggleVisibility = () => {

    const [hideTxt ,setHideTxt] = useState(false);


  return (
    <div>
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={hideTxt}
        onChange={() => setHideTxt(!hideTxt)}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {
            hideTxt ? "Hide" :"Show"
        }
      </label>
    </div>

    <div>
        {
            hideTxt && (
            <p>
                loremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            </p>

            )
        }
    </div>
  </div>
  )
}

export default ToggleVisibility