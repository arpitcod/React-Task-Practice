
// 10. **Date Range Filter:** - Implement a date range filter 
// to show items within a selected date range.
import React, { useState } from 'react'

const DateRangeFilter = () => {
    const [items] = useState([
        { id: 1, name: 'Event 1', date: '2024-09-01' },
        { id: 2, name: 'Event 2', date: '2024-09-05' },
        { id: 3, name: 'Event 3', date: '2024-09-20' },
        { id: 4, name: 'Event 4', date: '2024-09-29' }
      ]);

      const [startDate, setStartDate] = useState('');
      const [endDate, setEndDate] = useState('');


      const filteredData = items.filter(item =>{
            const itemDate = new Date(item.date)
            const start = startDate ? new Date(startDate) :null;
            const end = endDate ? new Date(endDate) : null;

            return (
                (!start || itemDate >= start) && 
                (!end || itemDate <= end)
            )
      })
  return (
    <div>
            <input type="date" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />

            <input type="date" 
            value={endDate}
            onChange={(e) =>setEndDate(e.target.value)}
            />

            <div>
                    <ul>
                        {
                            filteredData.map(item =>(
                                <li key={item.id}>{item.name} - {item.date}</li>
                            ))
                        }
                    </ul>
            </div>
    </div>
  )
}

export default DateRangeFilter