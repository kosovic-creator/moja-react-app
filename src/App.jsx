import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Test from './test/test'


function App() {
  function Form() {
    return (
      <>
       <p className='bg-blue-500 text-white p-2'>Dijete</p>
      </>
    )
  }
  function Dijete() {
    return (
      <p>dijete</p>
    )
  }

  return (
    <>
      <Form />
      {/* <Test /> */}

    </>
  )
}

export default App
