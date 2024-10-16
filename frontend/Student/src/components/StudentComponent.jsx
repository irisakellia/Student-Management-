import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentComponent = () => {

    const navigate = useNavigate();

const [photourl , setphotourl] = useState('');
const [firstName , setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email , setEmail] = useState('');
const [gender, setGender] = useState('');

function saveStudent(e){
    e.preventDefault();

    createStudent(student).then((response)=>{
        console.log(response.data);
        navigate('/student');
    })
}


  return (
    <div className="p-6">
      <form className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
          <input
            type="text"
            name="photourl"
            value={photourl}
            onChange={(e) => setphotourl(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter photo URL"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e).setFirstName(target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter first name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e).setLastName(target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter last name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e).setEmail(target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
          <select
            name="gender"
            value={gender}
            onChange={(e).setGender(target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700" onClick={saveStudent}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentComponent;
