import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createStudent, updateStudent, getStudentById } from '../service/StudentService';

const StudentComponent = () => {

  const navigate = useNavigate();
  const { id } = useParams(); 

  const [photourl, setPhotourl] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const [errors, setErrors] = useState({
    photourl: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
  });


  useEffect(() => {
    if (id) {
      getStudentById(id).then((response) => {
        const student = response.data;
        setPhotourl(student.photourl);
        setFirstName(student.firstName);
        setLastName(student.lastName);
        setEmail(student.email);
        setGender(student.gender);
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [id]);


  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (photourl.trim()) {
      errorsCopy.photourl = '';
    } else {
      errorsCopy.photourl = 'Photo URL is required';
      valid = false;
    }

    if (firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    if (gender.trim()) {
      errorsCopy.gender = '';
    } else {
      errorsCopy.gender = 'Gender is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }


  function saveOrUpdateStudent(e) {
    e.preventDefault();

    if (validateForm()) {
      const student = { photourl, firstName, lastName, email, gender };

      if (id) {
        
        updateStudent(id, student).then((response) => {
          console.log(response.data);
          navigate('/student');
        }).catch(error => {
          console.error(error);
        });
      } else {
        
        createStudent(student).then((response) => {
          console.log(response.data);
          navigate('/student');
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }

  
  function pageTitle() {
    if (id) {
      return <h2 className='text-xl font-bold'><span className='text-blue-950'>Update</span> Student</h2>;
    } else {
      return <h2 className='text-xl font-bold'><span className='text-blue-950'>Add</span> Student</h2>;
    }
  }

  return (
    <div className="p-6">
      {pageTitle()}

      <form className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
          <input
            type="text"
            name="photourl"
            value={photourl}
            onChange={(e) => setPhotourl(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300
              ${errors.photourl ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter photo URL"
          />
          {errors.photourl && (
            <div className="text-red-500 text-sm mt-2">{errors.photourl}</div>
          )}
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300
              ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter first name"
          />
          {errors.firstName && (
            <div className='text-red-500 text-sm mt-2'>{errors.firstName} </div>
          )}
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 
              ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter last name"
          />
          {errors.lastName && (
            <div className="text-red-500 text-sm mt-2">{errors.lastName}</div>
          )}
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 
              ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter email"
          />
          {errors.email && (
            <div className="text-red-500 text-sm mt-2">{errors.email}</div>
          )}
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 
              ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <div className="text-red-500 text-sm mt-2">{errors.gender}</div>
          )}
        </div>

       
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={saveOrUpdateStudent}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentComponent;
