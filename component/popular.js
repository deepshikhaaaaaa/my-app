'use client';
import Cards from "./cards";
import { useEffect, useState } from "react";
export default function Popular() {
    const [datapopular, setpopular] = useState({});
    const [loadingpopular, setloadingpopular] = useState(true);
    const [pagepop, setPagepop] = useState(1);


    useEffect(()=>{

    const urlpop = `https://api.themoviedb.org/3/movie/popular?api_key=28a21a6f4ab97b7e9063c5a90f30d383&page=${pagepop}`

    // setloading(true)
    fetch(urlpop)
        .then((res) => res.json())
        .then((data) => {
            setpopular(data)
            setloadingpopular(false)
        })
    },[pagepop])





    return (
        <div className="flex flex-col justify-center items-center ">
            <div className="flex ">
                <p onClick={() => { (pagepop > 1) ? setPagepop(pagepop - 1) : "" }}>prev</p>
                <p>{pagepop}</p>

                <p onClick={() => { setPagepop(pagepop + 1) }}>next</p>

            </div>
            {
                (!loadingpopular) ? <div className="grid grid-cols-3">
                    {
                        datapopular.results.map((e, i) => {
                            return (
                                <Cards data={e} id={i}></Cards>
                            )
                        })
                    }
                </div> : ""
            }
            <div className="flex ">
                <p onClick={() => { (pagepop > 1) ? setPagepop(pagepop - 1) : "" }}>prev</p>
                <p>{pagepop}</p>

                <p onClick={() => { setPagepop(pagepop + 1) }}>next</p>

            </div>
        </div>
    )
}