// **Checkbox Filter:**  - Create a filter using checkboxes that 
// allows users to select multiple options.

import React, { useState } from 'react'

const CheckBoxFilter = () => {
    const [items] = useState([
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Banana', category: 'Fruit' },
        { id: 3, name: 'Carrot', category: 'Vegetable' },
        { id: 4, name: 'Broccoli', category: 'Vegetable' },
        { id: 5, name: 'Chicken', category: 'Meat' }
      ]);

      const [selectedCategory, setSelectedCategory] = useState([]);

      const handleCheckboxChange = (category) =>{
        setSelectedCategory( prevSelcted =>(
            prevSelcted.includes(category) ? prevSelcted.filter((c )=>
                c !== category) : [...prevSelcted,category])
        )

      }


      const filteredData = items.filter(item =>(
        selectedCategory.length === 0 || selectedCategory.includes(item.category)
      ))
  return (
    <div>
        <label>
            <input type="checkbox" 
                value={'Fruit'}
                onChange={() => handleCheckboxChange('Fruit')}
            />
        </label>
        <label>
            <input type="checkbox" 
                value={'Vegetable'}
                onChange={() => handleCheckboxChange('Vegetable')}
            />
        </label>
        <label>
            <input type="checkbox" 
                value={'Meat'}
                onChange={() => handleCheckboxChange('Meat')}
            />
        </label>

        <div>
                <ul>
                    {
                        filteredData.map(item =>(
                            <li>{item.name} - {item.category}</li>
                        ))
                    }
                </ul>
        </div>
    </div>
  )
}

export default CheckBoxFilter