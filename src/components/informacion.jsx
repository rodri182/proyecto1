import React from "react"
import { Link } from "react-router-dom";

function Informacion ({imagen,alt,dmx,funcion}) {
return(
    <div id="dropdown" class="hidden bg-[#2A3342] rounded-lg shadow w-full border-1  p-8 mr-12 shadow-[#00000040] shadow-xl ">
    <div class="w-full inline-flex border border-slate-500 border-opacity-40 rounded-3xl  "> 
        <div class="container py-14 px-8 w-1/2">
            <Link to="#">
                <img class="h-20" src={require(`../assets/img/${imagen}`)} alt="img-profile"/>
            </Link>
        </div>
        <div class="container flex flex-col flex justify-center items-start gap-8">
            <p class="text-white text-center ">{dmx}</p>
            <p class="text-white text-center ">{funcion}</p>
            <div class="inline-flex gap-10">
                <p class="text-white text-center ">22-07-2022</p>    
                <p class="text-white text-center "> 2:05pm</p>
            </div>
        </div>
    </div>
</div>
)
}  
export default Informacion;