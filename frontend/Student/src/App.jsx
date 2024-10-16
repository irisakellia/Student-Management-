import { useState } from 'react'
import './App.css'
import ListStudentComponent from './components/ListStudentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListStudentComponent/>
    </>
  )
}

export default App
