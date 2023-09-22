'use client'
import Details from "./details";

import { useState, useEffect } from "react";
import Cards from "./cards";
export default function Toprated() {
    const [datatop, setdatatop] = useState({});
    const [loading, setloading] = useState(true);
    const [pagetop, setPagetop] = useState(1);
    const[detail,setdetail]=useState(false);
    const [datafor,setdatafor]=useState({});

    useEffect(() => {
        const urltop = `https://api.themoviedb.org/3/movie/top_rated?api_key=28a21a6f4ab97b7e9063c5a90f30d383&page=${pagetop}`
        fetch(urltop)
            .then((res) => res.json())
            .then((data) => {
                setdatatop(data)
                setloading(false)
            })

    }, [pagetop])




    return (
        (!detail)?  <div className="flex flex-col justify-center items-center">
            <div className="flex ">
                <button className="butt" onClick={() => { (pagetop > 1) ? setPagetop(pagetop - 1) : "" }}>prev</button>
                <button className="ml-[20px] mr-[20px]">{pagetop}</button>

                <button className="butt" onClick={() => { setPagetop(pagetop + 1) }}>next</button>

            </div>
            {
                (!loading) ? <div className="grid grid-cols-3">
                    {
                        datatop.results.map((e, i) => {
                            return (
                                <div onClick={()=>{setdetail(true)
                                    setdatafor(e)}} ><Cards data={e} id={i}></Cards></div>
                            )
                        })
                    }
                </div> : ""
            }
           <div className="flex ">
                <button className="butt" onClick={() => { (pagetop > 1) ? setPagetop(pagetop - 1) : "" }}>prev</button>
                <button className="ml-[20px] mr-[20px]">{pagetop}</button>

                <button className="butt" onClick={() => { setPagetop(pagetop + 1) }}>next</button>

            </div>
        </div>:<Details data={datafor}  detailschange={setdetail}></Details>
    )
}