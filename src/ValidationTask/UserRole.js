import React from 'react'

const UserRole = () => {
    const userRole = "admin"
  return (
    <div>
        <h1>{userRole ==="admin" ? "Admin":"User"}</h1>
    </div>
  )
}

export default UserRole