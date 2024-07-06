import React from 'react'
import './Nav.css'
const Nav = ({search ,  setSearch}) => {
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
      <input
      id = "search"
      type="text"
      placeholder="post search"
      value={search}
      onChange = {(e)=>setSearch(e.target.value)}
      />
      </form>
      
    </nav>
  )
}

export default Nav