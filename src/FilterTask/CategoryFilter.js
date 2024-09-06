// **Category Filter:** - Implement a category
//  filter that displays items based on selected categories.
import React, { useState } from 'react'

const CategoryFilter = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Pancakes', category: 'Breakfast' },
        { id: 2, name: 'Burger', category: 'Lunch' },
        { id: 3, name: 'Steak', category: 'Dinner' },
        { id: 4, name: 'Omelette', category: 'Breakfast' },
        { id: 5, name: 'Pizza', category: 'Lunch' },
        { id: 6, name: 'Pasta', category: 'Dinner' },
    ]);
    
    const [selectedCategory,setSelectedCategory] = useState('All');

    const handleOnClick = (value) =>{
        setSelectedCategory(value)
        console.log(value);
        
    }

    const filteredData = items.filter(item =>{
        if (selectedCategory==='All') {
            return true 
        }else{
            return item.category === selectedCategory ;
            
        }
        
        
    })
  return (
    <>
    <div>
        <h1>Category filter</h1>
        <button className='btn btn-primary' onClick={() =>handleOnClick('All')}>All</button>
        <button className='btn btn-danger' onClick={() => handleOnClick('Breakfast')}>Break  Fast</button>
        <button className='btn btn-warning' onClick={() => handleOnClick('Lunch')}>Launch</button>
        <button className='btn btn-success' onClick={() => handleOnClick('Dinner')}>Dinner</button>
    </div>

    <div>
        <ul>
        {
            filteredData?.map((item,index) =>(
                <li key={item.id}>{item.name}</li>
            ))
        }
        </ul>
    </div>
    </>
  )
}

export default CategoryFilter