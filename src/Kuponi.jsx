import React from 'react';

export function Kuponi({trenutnoUnos, onChange, onAdd }) {
    return (
        <div className='bg-blue-500 p-4'>
            <p className='text-white p-2'>kuponi</p>
            <input type="number" min="0" className='bg-white text-black border-2 border-black p-2' value={trenutnoUnos} onChange={(e) => onChange(Math.max(0, Number(e.target.value)))} />
            {/* <button className='bg-blue-500 text-white p-2' onClick={() => onChange((count) => count + 1)}>+</button>
              <button className='bg-blue-500 text-white p-2' onClick={() => onChange((count) => Math.max(0, count - 1))}>-</button> */}
            <button className='bg-blue-700 text-white p-2' onClick={onAdd}>Dodaj</button>

        </div>
    );
}
