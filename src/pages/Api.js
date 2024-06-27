export async function getVans(id) {
    try{
        const url = id ? `/api/vans/${id}` : "/api/vans"
        const res = await fetch(url)
   if(!res.ok){
    throw new Error('failed to fetch',{
        status:res.status,
        statusText:res.statusText,
    })
   }
   const data = await res.json()
   return data.vans
    }
    catch(error){
        console.error('fetch error:', error);
        throw error;
    }
}



export async function getHostVans(id){
    try{
        const url =id ? `/api/host/vans/${id}` : "/api/host/vans"
        const res = await fetch(url)
   if(!res.ok){
    throw new Error('failed to fetch',{
        status:res.status,
        statusText:res.statusText,
    })
   }
   const data = await res.json()
   return data.vans
    }
    catch(error){
        console.error('fetch error:', error);
        throw error;
    } 
}