'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Details(props) {
    var imgurl = 'https://bitsofco.de/img/Qo5mfYDE5v-350.png', bg;
    if (props.data && (props.data.poster_path != undefined || props.data.poster_path != null)) {
        imgurl = "https://image.tmdb.org/t/p/w500" + `${props.data.poster_path}`
        // bg = "bg-[url('" + `${imgurl}` + "')] h-[500px] w-[300px] bg-cover";
        // console.log(bg);
    }
    var revimg = 'https://bitsofco.de/img/Qo5mfYDE5v-350.png';
    // if (props.data && (props.data.author_details.avatar_path != undefined || props.data.author_details.avatar_path != null)) {
    //     revimg = "https://image.tmdb.org/t/p/w500" + `${props.data.author_details.avatar_path}`
    //     // bg = "bg-[url('" + `${imgurl}` + "')] h-[500px] w-[300px] bg-cover";
    //     // console.log(bg);
    // }
    const [revdata, setrevdata] = useState({});
    const [loading, setloading] = useState(true)


    useEffect(() => {

        // setloading(true)
        var revurl = `https://api.themoviedb.org/3/movie/${props.data.id}/reviews?api_key=28a21a6f4ab97b7e9063c5a90f30d383`
        fetch(revurl)
            .then((res) => res.json())
            .then((data) => {
                setrevdata(data)
                setloading(false)
                console.log(data)
                console.log(revdata)
            })

    }, [props.data.id])

    // var revurl=`https://api.themoviedb.org/3/movie/${props.data.id}/reviews?api_key=28a21a6f4ab97b7e9063c5a90f30d383`
    // (!loading)?console.log(revdata):"";
    console.log(revdata)
    return (
        <div className="flex flex-col justify-center items-center">
            {
                (props.data && imgurl) ? (<Image src={imgurl} height={600} width={600} className="h-[650px] w-[600px] object-cover"></Image>) : ""
            }
            <p>
                <span className="font-bold">  original_title:</span>   {props.data.original_title}
            </p>
            <p>
                <span className="font-bold">  original_language:</span>  {props.data.original_language}
            </p>
            <p className="w-[500px]">
                <span className="font-bold ">  overview: </span>  {props.data.overview}
            </p>
            <p>
                <span className="font-bold">popularity:</span>  {props.data.popularity}
            </p>
            <p>
                <span className="font-bold"> release_date:</span>  {props.data.release_date}
            </p>
            <p>
                <span className="font-bold">vote_count: </span> {props.data.vote_count}
            </p>
            <p>
                <span className="font-bold">vote_average:</span>  {props.data.vote_average}
            </p>
            {/* <p>
                {props.data.vote_count}
            </p> */}





            {/* review section */}
            <div>
                <p>Reviews</p>
                {(!loading) ? <div>{revdata.results.map((e) => {
                    if (e && (e.author_details.avatar_path != undefined || e.author_details.avatar_path != null)) {
                        revimg = "https://image.tmdb.org/t/p/w500" + `${e.author_details.avatar_path}`
                        
                    }
                    return (<div className="mb-8 w-[750px] h-[300px]  overflow-auto  border-gray-400 shadow-md border border-solid ">
                        {
                            (props.data && revimg) ? (<Image src={revimg} height={100} width={100} className="h-[100px] w-[100px] object-cover"></Image>) : ""
                        }
                        <div className="m-4 ml-2 mb-2">
                            <p >
                                <span className="font-bold">Name:</span> {e.author}
                            </p>
                            <p>
                                <span className="font-bold">Username:</span> {e.author_details.username}
                            </p>
                            <p className="w-[700px] h-[200] overflow-hidden">
                                {e.content}
                            </p>
                        </div>
                    </div>)
                })}</div> : ""}
            </div>
        </div>
    )
}