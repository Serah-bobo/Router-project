import { useEffect,useState } from "react"
import { Link } from "react-router-dom"


const Vans = () => {
  const[vans,setVans]=useState([])
  useEffect(()=>{
  fetch("/api/vans")
  .then(res=>res.json())
  .then(data=>setVans(data.vans))
  },[])

  const vanElements=vans.map(van=>(
    <div className="text-gray-900 no-underline" key={van.id}>
      <Link to={`/vans/${van.id}`}>
      <img className="rounded-md max-w-full" src={van.imageUrl} alt="dump"/>
      <div>
        <h3>{van.name}</h3>
        <p>${van.price}</p>
      </div>
      <i className="font-normal  h-8 px-6 py-1 border-none rounded-md bg-yellow-200 text-gray-700 transition-all duration-200
      ease-cubic-bezier-0.2-0.1-1 hover:bg-yellow-200xe 1swwwCD BNRT`GX  tnr6hi">{van.type}</i>
      </Link>
    </div>
  ))
  return (
   <div className="px-6">
    <div className="grid justify-center gap-8 grid-cols-2 mt-14">
      {vanElements}
    </div>
   </div>
  )
}

export default Vans