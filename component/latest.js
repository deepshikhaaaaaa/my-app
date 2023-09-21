'use client';
import Cards from "./cards";
import { useEffect, useState } from "react";

export default function Latest() {
    const [datalatest, setlatest] = useState({});
    const [loadinglatest, setloadinglatest] = useState(true);
    const [page, setPage] = useState(1);




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
        <div className="flex flex-col justify-center items-center ">
            <div className="flex ">
                <p onClick={() => { (page > 1) ? setPage(page - 1) : "" }}>prev</p>
                <p>{page}</p>

                <p onClick={() => { setPage(page + 1) }}>next</p>

            </div>
            {(loadinglatest) ? "loading" : "done"}
            {
                (!loadinglatest) ? <div className="grid grid-cols-5">
                    {
                        datalatest.results.map((e, i) => {
                            return (
                                <Cards data={e} id={i}></Cards>
                            )
                        })
                    }
                </div> : ""
            }
            <div className="flex">
                <p onClick={() => { setPage(page - 1) }}>prev</p>
                <p>{page}</p>

                <p onClick={() => { setPage(page + 1) }}>next</p>

            </div>
        </div>
    )
}