import './App.css'
import React from 'react'


function App() {
  const [count, setCount] = React.useState(0)

  function Kuponi(props) {
    return (
      <>
        <p className='bg-blue-500 text-white p-2'>kuponi</p>
        <input type="text" className='border-2 border-black p-2' value={props.ukupno} onChange={(e) => setCount(Number(e.target.value))} />
      </>
    )
  }
function Total(props) {
    return (
      <>
        <p className='bg-green-500 text-white p-2'>Total</p>
        <input type="text" className='border-2 border-black p-2' value={props.ukupno} onChange={(e) => setCount(Number(e.target.value))} />
      </>
    )
  }

  return (
    <>
      <Kuponi ukupno={count} />
      <Total ukupno={count} />
    </>
  )
}

export default App
