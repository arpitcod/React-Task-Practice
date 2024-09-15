// 3. **Display Usernames**: Map through an array of user objects to display their usernames.
import React from 'react'

const UserNames = () => {
        const users = [
            {
                id:1,
                username:"arpit"
            },
            {
                id:2,
                username:"krishna"
            },
            {
                id:3,
                username:"dwarka"
            }
        ]
  return (
    <div>
        <ul>
            {
                users?.map(user =>(
                    <li>{user.username}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default UserNames