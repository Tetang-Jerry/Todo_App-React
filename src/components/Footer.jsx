import React from 'react'

const Footer = ({ total, done }) => {
  return (
    <footer className='h-[100px] bg-yellow-300'>
        <div className='flex place-items-center gap-10 justify-center pt-5'>
            <div className='text-5xl font-semibold'>Total Todos: {total}</div>
            <div className='text-5xl font-semibold'>Completed Todos: {done}</div>
        </div>
    </footer>
  )
}

export default Footer