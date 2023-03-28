import React from "react";
import { Link } from "react-router-dom";

function Tickets ({id,horario,texto,imagen,alt,dmx,funcion}) {

  return(
   
   <div className="container mx-auto mb-1 p-10 bg-gray-800 rounded-md p-10">
    <Link to = {`/chat/${id}`}>
    <img className="py-4 mt-3.5 px-1 absolute w-20" src={require(`../assets/img/${imagen}`)} alt={alt} />
    <p className="text-slate-400 flex justify-end static"> {horario} </p>
    <div className="display grid justify-start ml-6">
    <h2 className="text-white text-2xl px-20 flex justify-start "> {dmx} </h2>
    <h3 className="text-white text-xl px-20 py-2 flex justify-start"> {funcion} </h3>
    <p className="text-slate-500 text-base px-20">{texto}</p>
    </div>
    </Link>
    </div>
    );
} 
export default Tickets;