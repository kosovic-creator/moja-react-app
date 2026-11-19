import './App.css'
import React from 'react'
import { Kuponi } from './Kuponi'
import { Total } from './Total'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = React.useState(0)
  const [kuponi, setKuponi] = React.useState(() => {
    const sacuvaniKuponi = localStorage.getItem('kuponi')
    return sacuvaniKuponi ? JSON.parse(sacuvaniKuponi) : []
  })
  const total = kuponi.reduce((zbir, vrijednost) => zbir + vrijednost, 0)

  useEffect(() => {
    localStorage.setItem('kuponi', JSON.stringify(kuponi))
  }, [kuponi])

  function dodajKupone() {
    setKuponi((prethodniKuponi) => [...prethodniKuponi, count])
    setCount(0)
  }

  return (
    <div className='min-h-svh bg-red-500'>
      <div className='bg-red-500 text-white p-2'>Roditeljski App</div>
      <Kuponi trenutnoUnos={count} onChange={setCount} onAdd={dodajKupone} />
      <Total ukupno={total} />

      <p className='bg-red-500 text-white p-2'>Roditeljski App</p>
    </div>
  )
}

export default App
