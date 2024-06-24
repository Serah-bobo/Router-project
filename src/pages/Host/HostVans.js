import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const HostVans = () => {
    const [vans, setVans]=useState([])
    useEffect(()=>{
        fetch('/api/host/vans')
        .then(res=>res.json())
        .then(data=>setVans(data.vans))
    },[])
    const hostVansEls=vans.map(van=>(
        <Link
        to={van.id}
        key={van.id}>
            <div 
            key={van.id}>
            <img src={van.imageUrl} alt="dump"/>
            <div>
                <h2>{van.name}</h2>
                <p>${van.price}</p>
            </div>
            

            </div>
           
        </Link>
    ))
  return (
   <section>
    <h1>Your listed Vans</h1>
    <div>
        {vans.length >0?(
            <section>
                {hostVansEls}
            </section>
        ):(
            <h2>Loading...</h2>
        )}
    </div>
   </section>
  )
}

export default HostVans