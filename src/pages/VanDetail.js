import { useParams } from "react-router-dom"
 import { useEffect,useState } from "react"
 const VanDetail = () => {
    const params=useParams()
    
const[van,setVan]=useState(null)

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=>setVan(data.vans))
        },[params.id])

   return (
     <div>
        {van?(
            <div>
                <img src={van.imageUrl} alt="detail"/>
                <i>{van.type}</i>
                <h2>{van.name}</h2>
                <p>${van.price}</p>
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