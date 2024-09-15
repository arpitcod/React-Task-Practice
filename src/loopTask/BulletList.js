import React from 'react'

const BulletList = () => {
    const items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 3',
        'Item 3',
        'Item 3',
        'Item 3',
        'Item 3',
        'Item 4'
    ];
  return (
    <div>
        <ul>
            {
                items?.map(item =>(
                    <li>{item}</li>
                ))
            }
        </ul>
    </div>




  )
}

export default BulletList