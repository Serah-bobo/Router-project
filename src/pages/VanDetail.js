//uselocation is used to access current location of an object



import { useParams,Link,useLocation } from "react-router-dom"
 import { useEffect,useState } from "react"
 const VanDetail = () => {
    const params=useParams()
    const location=useLocation();
    console.log(location)
const[van,setVan]=useState(null)

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=>setVan(data.vans))
        },[params.id])
const search=location.state?.search||''
const type=location.state?.type||''
   return (
     <div className="px-7">
         <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back {type}to all vans</span></Link>
        {van?(
            <div className='flex flex-col text-gray-900'>
                <img  className="border rounded-md my-12" src={van.imageUrl} alt="detail"/>
                <i className="self-start">{van.type}</i>
                <h2 className='mb-3 text-2xl'>{van.name}</h2>
                <p className="mb-3 text-sm">${van.price}</p>
                <p>{van.description}</p>
                <button>Rent this van</button>
            </div>
        ):
        <h2>loading...</h2>
        }
     </div>
   )
 }

 export default VanDetail