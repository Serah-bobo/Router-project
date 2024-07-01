import { getHostVans } from "../Api"
import { Link,useLoaderData,defer,Await } from "react-router-dom"
import { requireAuth } from "../../Components/Utilies"
import { Suspense } from "react"
export async function Loader({request}){
    await requireAuth({request})
    return defer ({vans:getHostVans()})
}
const HostVans = () => {
    const dataPromise=useLoaderData();

    const renderVans=(vans)=>{
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
        return(
            <div>
       
            <section>
                {hostVansEls}
            </section>
        
    </div>
        )
    }
    
   
  return (
   <section>
    <h1>Your listed Vans</h1>
    <Suspense fallback={<h2>Loading vans...</h2>}>
    <Await resolve={dataPromise.vans}>
    {renderVans}
    </Await>
    </Suspense>
    
    
   </section>
  )
}

export default HostVans