import React from 'react'

const EmailFormat = () => {
  return (
    <div>
        <div>
      <form >
        <div>
          <label>
            Email:
            <input
              type="email"
                required
              placeholder="Enter your email"
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default EmailFormat