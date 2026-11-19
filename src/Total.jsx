import React from 'react';

export function Total({ ukupno }) {
    return (
        <div className='bg-green-500 p-4'>
            <p className='text-white p-2'>Total</p>
            <input type="number" className='bg-white text-black border-2 border-black p-2' value={ukupno} readOnly />
        </div>
    );
}
