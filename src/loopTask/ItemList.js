import React from 'react'

const ItemList = () => {
    const items = ['Apple', 'Banana', 'Orange', 'Grapes',"arpit","krishna"];
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

export default ItemList