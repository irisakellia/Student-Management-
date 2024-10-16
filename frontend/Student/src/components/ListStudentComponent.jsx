import React, { useEffect, useState } from 'react'
import { listStudents } from '../service/StudentService'


const [students , setStudents ] = useState([])

useEffect(()=>{

    listStudents().then((response)=>{
        setStudents(response.data);
    }).catch(error=>{
        console.error(error)
    })
},[])


const ListStudentComponent = () => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Photo</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>{

            students.map(student =>
                <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.photo}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.Email}</td>
                <td>{student.gender}</td>
             </tr>

            )
           
            }
           
        </tbody>
      </table>
    </div>
  )
}

export default ListStudentComponent
