//a loader function fetches data and mounts before a component renders to avoid loading state and re-rendering
//the loader function is exported same component that data is to be rendered and imported in route and taken as a function
//fetched data is accessed using useloaderdata
//usesearchparams search certain parameters we have .get() .toString to access it use ?
//In React Router, useSearchParams is a hook that allows you to read and modify the query string parameters in the URL.
import { Link, useSearchParams, useLoaderData,defer,Await } from "react-router-dom"
import { getVans } from "./Api"
import { useState,Suspense } from "react"

export function loader() {
    return defer ({vans:getVans()})
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
   
    const dataPromise = useLoaderData()

    const typeFilter = searchParams.get("type")

    

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    
    
const rendervanElements=(vans)=>{
    
        const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans
        
        const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link
                to={van.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
            >
                <img alt={van.name} src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
        ))
        return(
            <>
             <div className="van-list-filter-buttons">
                        <button
                            onClick={() => handleFilterChange("type", "simple")}
                            className={
                                `van-type simple 
                                ${typeFilter === "simple" ? "selected" : ""}`
                            }
                        >Simple</button>
                        <button
                            onClick={() => handleFilterChange("type", "luxury")}
                            className={
                                `van-type luxury 
                                ${typeFilter === "luxury" ? "selected" : ""}`
                            }
                        >Luxury</button>
                        <button
                            onClick={() => handleFilterChange("type", "rugged")}
                            className={
                                `van-type rugged 
                                ${typeFilter === "rugged" ? "selected" : ""}`
                            }
                        >Rugged</button>
        
                        {typeFilter ? (
                            <button
                                onClick={() => handleFilterChange("type", null)}
                                className="van-type clear-filters"
                            >Clear filter</button>
                        ) : null}
        
                    </div>
                    <div className="van-list">
                        {vanElements}
                    </div>
            </>
        )
                        }
                        return (
                            <div className="van-list-container">
                                <h1>Explore our van options</h1>
                                <Suspense fallback={<h2>Loading...</h2>}>
                                <Await resolve={dataPromise.vans}>
                                    {rendervanElements}
                               
                                </Await>
                                </Suspense>
                                
                               
                            </div>
                        )
}
    
