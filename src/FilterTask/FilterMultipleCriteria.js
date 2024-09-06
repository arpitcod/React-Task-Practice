// 8. **Filter with Multiple Criteria:**- Implement a filter that can apply
//  multiple criteria, such as category and price.
import React, { useState } from 'react'

const FilterMultipleCriteria = () => {
    const [items] = useState([
        { id: 1, name: 'Apple', category: 'Fruit', price: 2 },
        { id: 2, name: 'Banana', category: 'Fruit', price: 1 },
        { id: 3, name: 'Carrot', category: 'Vegetable', price: 3 },
        { id: 4, name: 'Broccoli', category: 'Vegetable', price: 4 },
        { id: 5, name: 'Chicken', category: 'Meat', price: 10 }
      ]);

      const [selectedCategory, setSelectedCategory] = useState('All');
      const [priceRange, setPriceRange] = useState([0,10])


      const filteredData = items.filter(item =>{

        const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
        
        return matchCategory && matchPrice;
})

  return (
    <div>
        <div>
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="All" key="">All</option>
                    <option value="Fruit" key="">Fruit</option>
                    <option value="Vegetable" key="">Vegetable</option>
                    <option value="Meat" key="">Meat</option>
            </select>
        </div>

        <div>
            <input type="number" 
            placeholder='min price'
            value={priceRange[0]}
            onChange={(e) => setPriceRange([(e.target.value),priceRange[1]])}
            />
        </div>
        <div>
            <input type="number" 
            placeholder='max price'
            value={priceRange[1]}
            onChange={(e) => setPriceRange([(e.target.value) ,priceRange[0]])}
            />
        </div>


        <div>
            <ul>
                {
                    filteredData?.map(item =>(
                        <li>{item.name} - {item.category} - {item.price}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default FilterMultipleCriteria