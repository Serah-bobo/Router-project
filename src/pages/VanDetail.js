//uselocation is used to access current location of an object

import { getVans } from "./Api"

import { Link,useLocation,useLoaderData } from "react-router-dom"
 
 export function Loader({params}){
return getVans(params.id)
 }
 const VanDetail = () => {
    
    const location=useLocation();
    const van=useLoaderData()

    
const search=location.state?.search||''
const type=location.state?.type||''
   return (
     <div className="px-7">
         <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back {type}to all vans</span></Link>
        
            <div className='flex flex-col text-gray-900'>
                <img  className="border rounded-md my-12" src={van.imageUrl} alt="detail"/>
                <i className="self-start">{van.type}</i>
                <h2 className='mb-3 text-2xl'>{van.name}</h2>
                <p className="mb-3 text-sm">${van.price}</p>
                <p>{van.description}</p>
                <button>Rent this van</button>
            </div>
       
     </div>
   )
 }

 export default VanDetail