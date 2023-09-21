import Image from "next/image"
export default function Cards(props) {
    var imgurl='https://bitsofco.de/img/Qo5mfYDE5v-350.png', bg;
    if (props.data &&( props.data.poster_path!=undefined || props.data.poster_path!=null )) {
        imgurl = "https://image.tmdb.org/t/p/w500" + `${props.data.poster_path}`
        // bg = "bg-[url('" + `${imgurl}` + "')] h-[500px] w-[300px] bg-cover";
        // console.log(bg);
    }
    // 
    return (
        <div className="h-[450px] w-[350px]   m-4">
            <div className="w-[350px]  ">
                {
                    (props.data && imgurl)?(<Image src={imgurl} height={300} width={300} className="h-[350px] w-[300px] object-cover"></Image>):""
                }
            </div>
            <div className="w-[350px]  ">
                {
                    (props.data) ? (<p className="text-black text-[20px]  font-mono">{props.data.original_title}</p>) : ""
                }
            </div>
        </div>
    )
}