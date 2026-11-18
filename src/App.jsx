import './App.css'
import React from 'react'


function App() {
  const [count, setCount] = React.useState(0)

  function Kuponi(props) {
    return (
      <div className='bg-blue-500 p-4'>
        <p className='text-white p-2'>kuponi</p>
        <input type="text" className='bg-white text-black border-2 border-black p-2' value={props.ukupno} onChange={(e) => setCount(Number(e.target.value))} />
  <button className='bg-blue-500 text-white p-2' onClick={() => setCount(count + 1)}>+</button>
       <button className='bg-blue-500 text-white p-2' onClick={() => setCount(count - 1)}>-</button>

      </div>
    )
  }
function Total(props) {
    return (
      <div className='bg-green-500 p-4'>
        <p className='text-white p-2'>Total</p>
        <input type="text" className='bg-white text-black border-2 border-black p-2' value={props.ukupno} onChange={(e) => setCount(Number(e.target.value))} />
      </div>
    )
  }

  return (
    <div className='min-h-svh bg-red-500'>
      <div className='bg-red-500 text-white p-2'>App</div>
      {/* <input type="text" className='border-2 border-black p-2' value={count} onChange={(e) => setCount(Number(e.target.value))} /> */}
      {/* <button className='bg-blue-500 text-white p-2' onClick={() => setCount(count + 1)}>+</button>
       <button className='bg-blue-500 text-white p-2' onClick={() => setCount(count - 1)}>-</button>
      <Kuponi ukupno={count} /> */}
      <Kuponi ukupno={count} />
      <Total ukupno={count} />
      
    </div>
  )
}

export default App
