'use client';
import Cards from "./cards";
import { useEffect, useState } from "react";
import Details from "./details";

export default function Upcoming() {

    const [dataupcoming, setupcoming] = useState({});
    const [loadingup, setloadingup] = useState(true);
    const [pageup, setPageup] = useState(1);
    const[detail,setdetail]=useState(false);
    const [datafor,setdatafor]=useState({});

    
    
    
    // setloading(true)
    useEffect(()=>{
        
        const urlup = `https://api.themoviedb.org/3/movie/upcoming?api_key=28a21a6f4ab97b7e9063c5a90f30d383&page=${pageup}`
        fetch(urlup)
        .then((res) => res.json())
        .then((data) => {
            setupcoming(data)
            setloadingup(false)
            console.log(data)
        })
    },[pageup])






    return (
        (!detail)? <div className="flex flex-col justify-center items-center">
            <div className="flex ">
                <p onClick={() => { (pageup > 1) ? setPageup(pageup - 1) : "" }}>prev</p>
                <p>{pageup}</p>

                <p onClick={() => { setPageup(pageup + 1) }}>next</p>

            </div>
            {
                (!loadingup) ? <div className="grid grid-cols-3">
                    {
                        dataupcoming.results.map((e, i) => {
                            return (
                                <div onClick={()=>{setdetail(true)
                                    setdatafor(e)}} ><Cards data={e} id={i}></Cards></div>
                            )
                        })
                    }
                </div> : ""
            }
            <div className="flex ">
                <p onClick={() => { (pageup > 1) ? setPageup(pageup - 1) : "" }}>prev</p>
                <p>{pageup}</p>

                <p onClick={() => { setPageup(pageup + 1) }}>next</p>

            </div>
        </div>:<Details data={datafor}></Details>
    )
} 