import React from 'react'

const RenderTable = () => {
    const data = [
        { id: 1, name: 'John Doe', age: 28, occupation: 'Engineer' },
        { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },
        { id: 3, name: 'Alex Johnson', age: 45, occupation: 'Manager' },
        { id: 3, name: 'Alex Johnson', age: 45, occupation: 'Manager' },
        { id: 3, name: 'Alex Johnson', age: 45, occupation: 'Manager' },
        { id: 3, name: 'Alex Johnson', age: 45, occupation: 'Manager' },
        { id: 3, name: 'Alex Johnson', age: 45, occupation: 'Manager' },
        { id: 3, name: 'Alex Johnson', age: 45, occupation: 'Manager' },
        { id: 3, name: 'Alex Johnson', age: 45, occupation: 'Manager' },
        { id: 3, name: 'Alex Johnson', age: 45, occupation: 'Manager' },
      ];
  return (
    <div>
        <table border={1} cellPadding={8}>
            <thead>
                <tr key="">
                    <td>id</td>
                    <td>name</td>
                    <td>age</td>
                    <td>occupation</td>
                </tr>
            </thead>

            <tbody>
                {
                    data?.map((value,index) =>(
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>{value.occupation}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default RenderTable