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
    <div className="p-6 mt-20">
      <table className=" w-full text-left border-collapse">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="py-3 px-6">Photo</th>
            <th className="py-3 px-6">First Name</th>
            <th className="py-3 px-6">Last Name</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6">Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-blue-100`}>
              <td className="py-3 px-6">
                <img
                  src={student.photourl}
                  alt={`${student.firstName} ${student.lastName}`}
                  width="80"
                  height="80"
                  className="rounded-full"
                />
              </td>
              <td className="py-3 px-6">{student.firstName}</td>
              <td className="py-3 px-6">{student.lastName}</td>
              <td className="py-3 px-6">{student.email}</td>
              <td className="py-3 px-6">{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudentComponent;
