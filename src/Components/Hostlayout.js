//end is a prop of navlink It ensures that the link is only styled 
//as active if the current URL exactly matches the to prop value, up to the end (including any trailing slash).
import { Outlet } from "react-router-dom"
import { NavLink} from "react-router-dom"
const Hostlayout = () => {
    const activeStyle={
        fontWeight:'bold',
        textdecoration:'underline',
        color:'red'
    }
  return (
    <div>
        <NavLink
         className="font-semibold text-gray-700 no-underline px-4 py-1 hover:text-gray-800 hover:underline cursor-pointer"
          to="."
          style={({isActive})=>isActive? activeStyle:null}
          end
          >Dashboard</NavLink>
        <NavLink
         className="font-semibold text-gray-700 no-underline px-4 py-1 hover:text-gray-800 hover:underline cursor-pointer"
          to={'income'}
          style={({isActive})=>isActive? activeStyle:null}
          >Income</NavLink>

            <NavLink
         className="font-semibold text-gray-700 no-underline px-4 py-1 hover:text-gray-800 hover:underline cursor-pointer"
          to={'vans'}
          style={({isActive})=>isActive? activeStyle:null}
          >Vans</NavLink>
        <NavLink 
        className="font-semibold text-gray-700 no-underline px-4 py-1 hover:text-gray-800 hover:underline cursor-pointer" 
        to={'review'}
        style={({isActive})=>isActive? activeStyle:null}
        >Review</NavLink>
        <Outlet/>
    </div>
  )
}

export default Hostlayout