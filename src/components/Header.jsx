import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const links = [
    {
      title: 'All',
      path: '/'
    },

    {
      title: 'Completed',
      path: '/completed'
    }
  ]
  return (
    <header className='mb-2 h-[100px] bg-yellow-300 flex place-items-center justify-between px-5'>
      <h1 className='text-center text-5xl font-semibold pt-3'>TODO APP</h1>
      <div className='text-2xl flex gap-5'>
        {links.map((link, index) => 
        <NavLink className={(({isActive} ) => isActive ? 'font-semibold' : 'hover:font-semibold')} key={index} to={link.path}>{link.title}</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header