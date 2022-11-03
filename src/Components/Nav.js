import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='navbar'>
        <Link to="/Read">Read</Link>
        <Link to="/">Create</Link>
    </div>
  )
}

export default Nav