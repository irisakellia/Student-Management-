import React, { useEffect, useState } from 'react';
import { deleteStudent, listStudents } from '../service/StudentService';
import {useNavigate} from 'react-router-dom'

const ListStudentComponent = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  
    getAllStudents();
  }, []);

  function getAllStudents(){
    listStudents()
    .then((response) => {
      setStudents(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  function addNewStudent(){
    navigate('/add-student')

  }

  function updateStudent(id){
    navigate(`/edit-student/${id}`)
  }

  function removeStudent(id){
    console.log(id);

    deleteStudent(id).then((response)=>{

      getAllStudents();
    }).catch(error=>{
      console.error(error);
    })
  }

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
            <th>Actions</th>
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
              <td>
                <button className='border border-blue-950 bg-blue-950 p-2 py-2 rounded-md text-white' onClick={()=> updateStudent(student.id)}>Update</button>
                <button className='border border-blue-950 bg-blue-950 p-2 py-2 rounded-md text-white ml-4' onClick={()=> removeStudent(student.id)}>Delete</button>
              </td>
            </tr>


          ))}
        </tbody>
      </table>
      <button className='border border-blue-950 bg-blue-950 p-2 py-2 text-white font-medium mt-2 rounded-md' onClick={addNewStudent}>Add Student</button>
    </div>
  );
};

export default ListStudentComponent;
