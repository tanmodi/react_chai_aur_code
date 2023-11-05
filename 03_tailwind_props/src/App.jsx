import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './compoments/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-200 text-red-500 rounded-xl p-40' >Chai_aur_code</h1>
      <h1 className='bg-pink-500'>card</h1>
      
      
      
      <Card username="tanmay"/>
      <Card username="Modi"/>

      


    </>
  )
}

export default App
