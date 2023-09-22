'use client';
import Cards from "./cards";
import { useEffect, useState } from "react";
import Details from "./details";
export default function Latest() {
    const [datalatest, setlatest] = useState({});
    const [loadinglatest, setloadinglatest] = useState(true);
    const [page, setPage] = useState(1);
    const [detail, setdetail] = useState(false);
    const [datafor, setdatafor] = useState({});



    useEffect(() => {

        // setloading(true)
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=28a21a6f4ab97b7e9063c5a90f30d383&page=${page}`
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setlatest(data)
                setloadinglatest(false)
            })

    }, [page])





    return (
        (!detail) ? <div className="flex flex-col justify-center items-center ">
            <div className="flex ">
                <button className="butt" onClick={() => { (page > 1) ? setPage(page - 1) : "" }}>prev</button>
                <button className="ml-[20px] mr-[20px]">{page}</button>

                <button className="butt" onClick={() => { setPage(page + 1) }}>next</button>

            </div>
            {(loadinglatest) ? "loading" : "done"}
            {
                (!loadinglatest) ? <div className="grid grid-cols-3">
                    {
                        datalatest.results.map((e, i) => {
                            return (
                                <div onClick={() => {
                                    setdetail(true)
                                    setdatafor(e)
                                }} ><Cards data={e} id={i}></Cards></div>
                            )
                        })
                    }
                </div> : ""
            }
           <div className="flex ">
                <button className="butt" onClick={() => { (page > 1) ? setPage(page - 1) : "" }}>prev</button>
                <button className="ml-[20px] mr-[20px]">{page}</button>

                <button className="butt" onClick={() => { setPage(page + 1) }}>next</button>

            </div>
        </div> : <Details data={datafor} detailschange={setdetail}></Details>
    )
}