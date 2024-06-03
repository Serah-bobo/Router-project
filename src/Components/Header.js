import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex h-28 p-4 items-center">
      <Link className="mr-auto font-bold text-black uppercase text-2xl" to={'/'}>#VANLIFE</Link>
      <nav className="flex">
        <Link className="font-semibold text-gray-700 no-underline px-4 py-1 hover:text-gray-800 hover:underline cursor-pointer" to= {'/host'}>Host</Link>
      <Link className="font-semibold text-gray-700 no-underline px-4 py-1 hover:text-gray-800 hover:underline cursor-pointer" to={'/about'}>About</Link>
      <Link className="font-semibold text-gray-700 no-underline px-4 py-1 hover:text-gray-800 hover:underline cursor-pointer" to={'/vans'}>Vans</Link>
      </nav>
    </header>
  )
}

export default Header