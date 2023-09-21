'use client'
import Image from "next/image";

export default function Details(props) {
    var imgurl = 'https://bitsofco.de/img/Qo5mfYDE5v-350.png', bg;
    if (props.data && (props.data.poster_path != undefined || props.data.poster_path != null)) {
        imgurl = "https://image.tmdb.org/t/p/w500" + `${props.data.poster_path}`
        // bg = "bg-[url('" + `${imgurl}` + "')] h-[500px] w-[300px] bg-cover";
        // console.log(bg);
    }
    console.log(props);
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
        </div>
    )
}