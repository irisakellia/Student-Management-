import { useState } from 'react'
import './App.css'
import ListStudentComponent from './components/ListStudentComponent'
import HeaderComponent from './components/HeaderComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderComponent/>
      <ListStudentComponent/>
    </>
  )
}

export default App
