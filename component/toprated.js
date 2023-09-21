'use client'

import { useState, useEffect } from "react";
import Cards from "./cards";
export default function Toprated() {
    const [datatop, setdatatop] = useState({});
    const [loading, setloading] = useState(true);
    const [pagetop, setPagetop] = useState(1);


    useEffect(()=>{

    const urltop = `https://api.themoviedb.org/3/movie/top_rated?api_key=28a21a6f4ab97b7e9063c5a90f30d383&page=${pagetop}`


    // setloading(true)
    fetch(urltop)
        .then((res) => res.json())
        .then((data) => {
            setdatatop(data)
            setloading(false)
        })

    },[pagetop])




    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex ">
                <p onClick={() => { (pagetop > 1) ? setPagetop(pagetop - 1) : "" }}>prev</p>
                <p>{pagetop}</p>

                <p onClick={() => { setPagetop(pagetop + 1) }}>next</p>

            </div>
            {
                (!loading) ? <div className="grid grid-cols-3">
                    {
                        datatop.results.map((e, i) => {
                            return (
                                <Cards data={e} id={i}></Cards>
                            )
                        })
                    }
                </div> : ""
            }
            <div className="flex ">
                <p onClick={() => { (pagetop > 1) ? setPagetop(pagetop - 1) : "" }}>prev</p>
                <p>{pagetop}</p>

                <p onClick={() => { setPagetop(pagetop + 1) }}>next</p>

            </div>
        </div>
    )
}