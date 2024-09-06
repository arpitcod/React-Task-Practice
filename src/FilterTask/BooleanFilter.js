// 5. **Boolean Filter:**- Create a toggle switch to filter items by 
// a boolean property (e.g., show only completed tasks).
import React, { useState } from 'react'

const BooleanFilter = () => {

    const [tasks ,setTasks] = useState([
        { id: 1, name: 'Task 1', completed: false },
        { id: 2, name: 'Task 2', completed: true },
        { id: 3, name: 'Task 3', completed: false },
    ])

    const [showCompleted,setShowCompleted] = useState(false)

    const handleToggle = () =>{
        setShowCompleted(!showCompleted)
    }

    const filteredTask = tasks.filter(task =>{
        return showCompleted ? task.completed : true;
    })
  return (
    <div>
        <label>
            show completed

            <input type="checkbox" checked={showCompleted} onChange={handleToggle} />
        </label>

        <div>
            <ul>
                {
                    filteredTask?.map(task =>(
                        <li>{task.name} {task.completed ? '(completed)' : '(pending)'}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default BooleanFilter