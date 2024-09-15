import React from 'react'

const TodoItems = () => {
    const tasks = [
        { id: 1, task: 'Complete React project', completed: false },
        { id: 2, task: 'Read a JavaScript book', completed: true },
        { id: 3, task: 'Exercise for 30 minutes', completed: false },
      ];
  return (
    <div>
            <table border={1} cellPadding={8}>
                <thead>
                    <tr key="">

                        <td>id</td>
                        <td>task</td>
                        <td>completed</td>

                    </tr>
                </thead>

                <tbody>
                        {
                            tasks?.map(task =>(
                                <tr key="">
                                    <td>{task.id}</td>
                                    <td>{task.task}</td>
                                    <td>{task.completed}</td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
    </div>
  )
}

export default TodoItems