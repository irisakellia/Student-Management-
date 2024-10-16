import { useState } from 'react'
import './App.css'
import ListStudentComponent from './components/ListStudentComponent'
import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import StudentComponent from './components/StudentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      
      
      <Route path='/' element={<StudentComponent/>}></Route>
    
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
