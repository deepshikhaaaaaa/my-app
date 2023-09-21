'use client';
import { useEffect, useState } from "react";
import Cards from "./cards";
var data, dataf;
import Toprated from "./toprated";
import Upcoming from "./upcoming";
import Latest from "./latest";
import Popular from "./popular";

export default function First() {

    const [datapop, setDatapop] = useState({});
    const [datalat, setDatalat] = useState({});
    const [dataup, setDataup] = useState({});
    const [datatop, setDatatop] = useState({});

    const [loading, setloading] = useState(true)
    const [pop, setpop] = useState(false)
    const [top, settop] = useState(false)
    const [up, setup] = useState(true)
    const [lat, setlat] = useState(false)
    const [search, setsearch] = useState("")
    const [searchval, setsearchval] = useState({})

    const searching = (e) => {
        setsearch(e.target.value);
        const url = `https://api.themoviedb.org/3/search/multi?api_key=28a21a6f4ab97b7e9063c5a90f30d383&query=${search}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setsearchval(data)
                setloading(false)
            })
    }



    const searchvalue = (

        (!loading) ? <div className="grid grid-cols-3">
            {
                searchval.results.map((e, i) => {
                    return (
                        <Cards data={e} id={i}></Cards>
                    )
                })
            }
        </div> : ""

    )


    return (
        <div className="w-full bg-white">
            <input type="text" className="searchbox" onChange={(e) => searching(e)} />
            <div className="flex gap-x-[40px]  font-mono text-[20px] space-x-[-3px]">
                <button onClick={() => {
                    setup(true);
                    setlat(false);
                    setpop(false);
                    settop(false);
                    setloading(true);
                }}>Upcoming</button>
                <button onClick={() => {
                    settop(true);
                    setlat(false);
                    setpop(false);
                    setup(false);
                    setloading(true);
                }
                }>Top-rated</button>
                <button onClick={() => {
                    setup(false);
                    setlat(false);
                    setpop(true);
                    settop(false);
                    setloading(true);
                }}>Popular</button>
                <button onClick={() => {
                    setup(false);
                    setlat(true);
                    setpop(false);
                    settop(false);
                    setloading(true);
                }}>Latest</button>
            </div>
            <div className=" font-mono text-[20px] space-x-[-3px] mt-[20px]">

                {/* {(loading) ? "loading" : "done"} */}

                {(!loading) ? searchvalue : ""}

                {(top && loading) ? <Toprated></Toprated> : ""}
                {(up && loading) ? <Upcoming></Upcoming> : ""}
                {(lat && loading) ? <Latest></Latest> : ""}
                {(pop && loading) ? <Popular></Popular> : ""}
            </div>


        </div>
    )
}