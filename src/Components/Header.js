import {Link, NavLink } from "react-router-dom"

const Header = () => {
    const activeStyle={
        fontWeight:'bold',
        textdecoration:'underline',
        color:'red'
    }
  return (
    <header className="flex h-28 p-4 items-center">
      <Link className="mr-auto font-bold text-black uppercase text-2xl" to={'/'}>#VANLIFE</Link>
      <nav className="flex">
        <NavLink 
        className="font-semibold text-gray-700 no-underline px-4 py-1 hover:text-gray-800 hover:underline cursor-pointer" 
        to= {'/host'}
        style={({isActive})=>isActive? activeStyle:null}
        >Host</NavLink>
      <NavLink 
      className="font-semibold text-gray-700 no-underline px-4 py-1 hover:text-gray-800 hover:underline cursor-pointer" 
      to={'/about'}
      style={({isActive})=>isActive? activeStyle:null}
      >About</NavLink>
      <NavLink 
      className="font-semibold text-gray-700 no-underline px-4 py-1 hover:text-gray-800 hover:underline cursor-pointer"
       to={'/vans'}
       style={({isActive})=>isActive? activeStyle:null}
       >Vans</NavLink>
      </nav>
    </header>
  )
}

export default Header