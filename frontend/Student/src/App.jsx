import { useState } from 'react'
import './App.css'
import ListStudentComponent from './components/ListStudentComponent'
import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import StudentComponent from './components/StudentComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>      
   <Routes>
  <Route path='/student' element={<ListStudentComponent />} />
  <Route path='/add-student' element={<StudentComponent />} />
  <Route path='/edit-student/:id' element={<StudentComponent />} /> 
</Routes>
<FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
