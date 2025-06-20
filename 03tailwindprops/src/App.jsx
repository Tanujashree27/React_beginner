// App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card9 from './Card9'  // <-- You should separate Card9 in its own file

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username:"wani",
    age:12
  }
  let newArr = [1,2,3]
  return (
    <>
      <Card9 username ="chaiaurcode" btntext="react " someObj = {newArr}/>
      <Card9 username ="wani" btntext="cool"/>
      <h1 className='bg-green-400 text to-black p-4
      rounded-3xl mb-4'>hihi</h1>
    </>
  )
}

export default App
