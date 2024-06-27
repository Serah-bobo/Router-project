import { getHostVans } from "../Api"
import { Link,useLoaderData } from "react-router-dom"
import { requireAuth } from "../../Components/Utilies"
export async function Loader(){
    await requireAuth()
    return getHostVans()
}
const HostVans = () => {
    const vans=useLoaderData();
    
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
       
            <section>
                {hostVansEls}
            </section>
        
    </div>
   </section>
  )
}

export default HostVans