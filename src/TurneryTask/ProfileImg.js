//  **Profile Picture**: Show a default profile picture if the 
//  user hasn't uploaded one, otherwise show the uploaded picture.
import React, { useState } from 'react'

const ProfileImg = () => {
    // const [profile,setProfile] = useState(false);

    const profile = false;
    const profilePic = "https://images.pexels.com/photos/1480913/pexels-photo-1480913.jpeg?auto=compress&cs=tinysrgb&w=600";
    const defaultPic = "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=600"
    return (
    <div className='w-50 '>
        <img src={`${profile === true ? profilePic : defaultPic}`} className='w-100 '/>
    </div>
  )
}

export default ProfileImg