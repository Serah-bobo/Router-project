import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
const Hostlayout = () => {
  return (
    <div>
        <Link  className="font-semibold text-gray-700 no-underline px-4 py-1 hover:text-gray-800 hover:underline cursor-pointer" to={'/host'}>Dashboard</Link>
        <Link className="font-semibold text-gray-700 no-underline px-4 py-1 hover:text-gray-800 hover:underline cursor-pointer" to={'/host/income'}>Income</Link>
        <Link className="font-semibold text-gray-700 no-underline px-4 py-1 hover:text-gray-800 hover:underline cursor-pointer" to={'/host/review'}>Review</Link>
        <Outlet/>
    </div>
  )
}

export default Hostlayout