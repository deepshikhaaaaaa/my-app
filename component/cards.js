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
        <div className="h-[500px] sm:w-[350px] w-[200px]  m-4 rounded-[15px] shadow-md border  border-solid border-gray-200 hover:bg-gray-100">
            <div className="sm:w-[350px] h-[450px] items-center justify-center flex ">
                {
                    (props.data && imgurl)?(<Image src={imgurl} height={300} width={300} className="h-[400px] hover:h-[410px] hover:w-[310px] rounded-2  rounded-[10px] self-center flex w-[300px] object-cover"></Image>):""
                }
            </div>
            <div className="w-[350px]  items-center justify-center flex">
                {
                    (props.data) ? (<p className="text-black text-[20px]  font-mono truncate hover:font-bold hover:text-[22px]">{props.data.original_title}</p>) : ""
                }
            </div>
        </div>
    )
}