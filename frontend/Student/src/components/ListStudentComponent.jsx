import React, { useEffect, useState } from 'react';
import { listStudents } from '../service/StudentService';

const ListStudentComponent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    listStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <img src={student.photourl} alt={`${student.firstName} ${student.lastName}`} width="150" height="150" className='rounded-full' />
              </td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td> 
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudentComponent;
