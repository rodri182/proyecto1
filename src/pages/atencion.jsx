import React from "react";
import {Link} from "react-router-dom";
import atencion from "../inicio.json";
import Tickets from "../components/tickets";
import {ArrowLongLeftIcon, TrashIcon, ArrowPathIcon,EnvelopeIcon } from '@heroicons/react/24/solid';

function Atencion () {
  return (
<div class="bg-gray-700 h-full">
    <header class="bg-gray-800 w-full flex justify-between p-6 drop-shadow-xl">
        <div class="flex justify-start">
          <div class="bg-gray-700 p-4 rounded-lg flex py-5">
            <Link to="/"><ArrowLongLeftIcon className="h-10 w-10 text-blue-500"/></Link>
          </div>
      
        </div>
          <div class="flex justify-end gap-4">
            <div class="bg-gray-700 p-3 rounded-lg ">
              <Link to="/"><ArrowPathIcon className=" mt-3 h-8 w-8 text-blue-500"/></Link>
            </div>
            <div class="bg-gray-700 p-3 rounded-lg ">
                <Link to="/"><TrashIcon className=" mt-3 h-8 w-8 text-blue-500"/></Link>
            </div>
            <div class="bg-gray-700 p-4 rounded-lg ">
                <Link to="/"><EnvelopeIcon className=" mt-2 h-8 w-8 text-blue-500"/></Link>
            </div>
        </div>
    </header>
    <main class="bg-gray-700 h-full">
        <section class="flex justify-between p-4">
            <h1 class="text-slate-200 text-3xl p-4">Atendiendo</h1>
        </section>
        <section>
        <div>
                {atencion.map((tickets)=>(
                <Tickets
                    key={tickets.id}
                    horario={tickets.horario}
                    imagen={tickets.imagen}
                    alt={tickets.alt}
                    dmx={tickets.dmx}
                    funcion={tickets.funcion}
                    texto={tickets.texto}
                />
            )
                )}
            </div>
        </section>
    </main>
    </div>
  )
}
export default Atencion;