import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import inicio from "../inicio.json"
import Tickets from "../components/tickets";
import Menu from "./menu";


function Inicio () {
 const [open, setOpen] = useState(false) 
const test = () => setOpen(!open)
return (
    <div className=" w-screen h-screen bg-gray-800">
    <header className="bg-gray-800 w-full flex justify-between p-6 drop-shadow-md">
        <div className="bg-gray-700 p-3 rounded-lg">
            <Bars3Icon className="h-10 w-10 text-blue-500" onClick={()=> setOpen(true)}/>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg">
            <Link to="#"><MagnifyingGlassIcon className="h-10 w-10 text-blue-500"/></Link>
        </div>
    </header>
    <main className=" bg-slate-700 px-5 py-1">
            <h1 className="text-slate-300  pt-4 pb-4 text-2xl flex justify-center">Tus Tickets</h1>
        <section className="flex justify-between p-2 gap-4 ">
            <div className="container mx-auto w-36 h-40 bg-slate-800 rounded-md p-6 ">
                <h2 className="text-slate-400 text-2xl flex justify-center pb-2 ">Pendientes</h2>
                <p className="text-fuchsia-500 text-5xl font-bold flex justify-center mt-2">15</p>
            </div>
            <div className="container mx-auto w-36 h-40  bg-slate-800 rounded-md p-6 ">
                <h2 className="text-slate-400 text-2xl flex justify-center align-top pb-2 ">Resueltos</h2>
                <p className="text-fuchsia-500 text-5xl font-bold flex justify-center mt-2">28</p>
            </div>
        </section>
        <section>
            <div className="container mb-6 ml-8 flex justify-center">
                <h2 className="text-slate-300 font-bold ml-11 pt-4 text-2xl flex justify-center">NUEVOS TICKETS</h2>
            </div>
        </section>
        <section>
            <div>
                {inicio.map((tickets)=>(
                <div>
                <Tickets
                    key={tickets.id}
                    id={tickets.id}
                    horario={tickets.horario}
                    imagen={tickets.imagen}
                    alt={tickets.alt}
                    dmx={tickets.dmx}
                    funcion={tickets.funcion}
                    texto={tickets.texto}
                    />
                 
                </div>
               
                 )
                )}
            </div>
        </section>
       <div className= {`${!open && "hidden"} bg-gray-800/50 h-full w-full fixed top-0 left-0 rigth-0`}>
        <Menu test={test}/>
        </div>
    </main>
    </div>
)
}

export default Inicio;