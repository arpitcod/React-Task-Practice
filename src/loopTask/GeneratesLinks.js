import React from 'react'

const GeneratesLinks = () => {
    const links = [
        { id: 1, url: 'https://www.google.com', label: 'Google' },
        { id: 2, url: 'https://www.facebook.com', label: 'Facebook' },
        { id: 3, url: 'https://www.twitter.com', label: 'Twitter' },
      ];
    
  return (
    <div>
        <ul className='d-flex flex-column'>
            {
                links?.map(link =>(
                   <a href={link.url}>{link.label}</a>
                ))
            }
        </ul>
    </div>
  )
}

export default GeneratesLinks