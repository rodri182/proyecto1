import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import inicio from "../inicio.json";
import {ArrowLeftIcon,InformationCircleIcon, EllipsisVerticalIcon,PlusIcon, EnvelopeIcon, PaperAirplaneIcon}from '@heroicons/react/24/solid';
import Informacion from "../components/informacion";
import { useEffect } from "react";

function Chat () {
    const { userid } = useParams();
    console.log('userparams: ', userid)
    const [user, setUser]= useState();  

    useEffect(() => {
        const usuario = inicio.find(user => user.id == userid)
        setUser({
            ...user,
            usuario
        });
    
    }, [userid])
    /*
    */
/*
const chatUsuarios = (userid) => {
    //const usuario = inicio.find(user => user.id === userid)
    const usuario = inicio.find((user) => {
        console.log("%%%%");
        console.log("userid: ",  userid);
        console.log("user: ",  user.id);
        console.log("%%%%");
        return user.id === userid 
    }) 
    setUser({
      ...user,
      usuario
    });

};
chatUsuarios(userid);
*/
    return (
    
     <div class="w-screen h-screen bg-[#333F51] box-border box-content" >  
     <header class="w-full h-20 bg-[#2A3342] flex justify-between p-2  sticky top-0 flex space-x-4 flex-wrap shadow-[#00000040] shadow-xl">
        <section class="flex flex-start ml-2">
            <div class="bg-[#333E50] p-4 rounded-lg flex py-5">
                    <Link to="/"><ArrowLeftIcon class="h-6 text-white"/></Link>
            </div>
            {user.dmx}
        </section>
            <section class="flex justify-end">
                <div class="flex gap-4">
                  <div class="bg-[#333E50]  rounded-lg pt-3 pb-3 flex ">
                        <button id="dropdownMenuIcon2" data-dropdown-toggle="dropdown" class="text-fuchsia-800 rounded-lg px-3" type="button"> 
                            <InformationCircleIcon className="h-8 w-8 " alt="info"/>
                            <section>
                                <div>

                                    <Informacion
                                           key={user.id}
                                           imagen={user.imagen}
                                           alt={user.alt}
                                           dmx={user.dmx}
                                           funcion={user.funcion}
                                           texto={user.texto}
                                    />
          
                                </div>
                            </section>
                        </button>
                  </div>
                        <div class="flex justify-end rounded-lg ">
                          <button id="dropdownMenuIconButton"  data-dropdown-toggle="dropdownDots" class="inline-flex items-center text-sm font-medium text-center rounded-lg" type="button"> 
                              <EllipsisVerticalIcon className="h-8 w-8 text-white" alt="menu"/>
                          </button>
                              <div id="dropdownDots" class=" hidden  bg-[#333E50] ">
                                  <ul class="py-2 mr-12 text-sm text-white" aria-labelledby="dropdownMenuIconButton">
                                      <li>
                                         <Link to="#"class="block px-4 py-2 text-white">opcion 1</Link>
                                      </li>
                                      <li>
                                        <Link to="#" class="block px-4 py-2  ">opcion 2</Link>
                                      </li>
                                      <li>
                                        <Link to="#"class="block px-4 py-2  ">opcion 3</Link>
                                      </li>
                                      <li>
                                        <Link to="#" class="block px-4 py-2  ">opcion 4</Link>
                                      </li>
                                      <li>
                                        <Link to="#" class="block px-4 py-2 e">opcion 5</Link>
                                      </li>
                                  </ul>
                              </div> 
                      </div>  
                </div>   
            </section>          
    </header>
    <div class="w-full bg-[#333F51] overflow-x-hidden">
        <section class="flex gap-4 mt-12 flex-col-2">
    
            <div class="inline-flex flex justify-between">
                <img class="h-11 m-8" src={require(`../assets/img/img-2.png`)}alt="profile"/>
                    
            </div>
            <div class="container w-1/2 xl:w-1/3 bg-[#1B1B1B]  p-6 rounded-xl inline-flex">
                
                <p class="text-white text-xl px-2 ">Hola, necesito ayuda</p>
                             
            </div> 
        </section>
        <div class="text-[#ffffff40] my-2  flex flex-start mt-2 ml-32" >
            <p>Today,2:02pm</p>
        </div>
        <section class=" flex gap-4 mt-12  flex-col-2 flex justify-end">
          
            <div class="container w-1/2 xl:w-1/3  bg-[#252A32] ml-16 p-6 rounded-xl inline-flex">
                
                <p class="text-white text-xl px-2 ">Buen dia, claro que si!</p>
               
            </div>   
            <div class="inline-flex flex justify-between">
                <img class="h-11 m-8 " src={require(`../assets/img/img-3.png`)} alt="profile"/>
            </div>
        </section>
        
        <div class="text-[#ffffff40] mt-4 flex justify-end mr-32" >
            <p>Today,2:12pm</p>
        </div>
        
        <section class=" flex gap-4 mt-4 flex-col-2 ">
            <div class="inline-flex flex ">
                <img class="h-11 m-8" src={require(`../assets/img/img-2.png`)} alt="profile"/>
            </div>
            <div >
                <div class="container w-1/2 xl:w-full  bg-[#1B1B1B] p-6 rounded-xl my-2 ">
                    <p class="text-white text-xl px-2">Tengo un problema</p>
                </div>
                <div class="container w-1/2 xl:w-full bg-[#1B1B1B] p-6 rounded-xl my-2">
                    <p class="text-white text-xl px-2">No entiendo como puedo hacer para ingresar dentro del evento.</p>
                </div>
                <div class="container w-1/2 xl:w-full bg-[#1B1B1B]  p-6 rounded-xl my-2 ">
                    <p class="text-white text-xl px-2">Me podrias ayudar? </p>
                </div>
            </div>
        </section>
        <div class="text-[#ffffff40] flex flex-start mt-2 ml-32" >
            <p>Today,2:13pm</p>
        </div>
        <section class="flex gap-4 mt-12  flex-col-2 flex justify-end">
            <div class="container w-1/2 xl:w-1/3 h-auto bg-[#252A32] p-6 rounded-xl inline-flex flex justify-start ">
                <p class="text-white text-xl px-2 ">La idea es que entres desde el sifuiente link <Link to="www.figma.com">www.figma.com</Link></p>
            </div>   
            <div class="inline-flex flex justify-between">
                <img class="h-11 m-8 " src={require(`../assets/img/img-3.png`)} alt="profile"/>
            </div>
        </section>
        <section>
        <div class="text-[#ffffff40] my-2 flex justify-end mb-12 mr-32">
            <p>Today,2:14pm</p>
        </div>
        </section>
    </div>
    <footer class="w-full bg-[#2A3342] -mt-2 p-4  h-18 sticky bottom-0 shadow-[#00000040] shadow-[0_-4px_4px]">
        <div class="  flex  border-none bg-[#2A3342]w-full">
            <input  class="w-full rounded-xl px-4 mx-auto " type="text" placeholder="Mensaje"/>
            <button id="dropdownTopButton" data-dropdown-toggle="dropdownTop" data-dropdown-placement="top" class="w-16  rounded-full text-sm bg-[#2A3342] flex-col-2 h-14 ml-2" type="button">
                <PlusIcon class="h-8 ml-2 text-white" alt="add-img"/>
                </button>

            <div id="dropdownTop" class=" hidden py-8 flex-rows-2 rounded-lg  flex justify-center  items-center  w-11/12 ">
                
                <ul class=" flex gap-12 text-sm bg-[#2A3342] hover rounded-xl  border-none  p-8 ml-4 mr-12 w-screen flex justify-center shadow-[#00000040] shadow-xl " aria-labelledby="dropdownTopButton">
                <li>
                    <div class="h-12 w-12 flex justify-center rounded-full bg-fuchsia-600">
                        <Link to="#" class="block px-4 py-3 static hover:bg-violet-400 ">
                        <EnvelopeIcon class="h-6"  alt="img"/>
                        </Link>
                    </div>
                    <p class="text-xl text-[#FEFEFF]">Imagen</p>
                </li>
                <li>
                    <div class="h-12 w-12 text-center  rounded-full bg-fuchsia-600	">
                        <Link to="#"className="block px-4 py-1 hover:bg-violet-400 text-white"><img src={require(`../assets/icons/archive.svg`)} alt=""/>
                        </Link>
                    </div>
                    <p class="text-xl text-[#FEFEFF]">Archivo</p>
                </li>
                <li>
                    <div class="h-12 w-12 text-center rounded-full bg-fuchsia-600">
                    <Link to="#" class="block px-4 py-5 hover:bg-violet-400 ">
                            <EnvelopeIcon className="h-6 text-white " alt="message"/>
                    </Link>
                    </div>
                    <p class="text-xl text-[#FEFEFF]">Mensaje</p>
                </li>
                </ul>
            </div>
            <button class="border-none hover:bg-violet-800 rounded-3xl ">
                <div class="h-12 w-12 flex justify-center rounded-full bg-fuchsia-600">
                 <Link to="#" class="block px-4 py-3 static hover:bg-violet-400 ">
                    <PaperAirplaneIcon class="h-6 text-white" alt="img"/>
                </Link>
                </div></button>
        </div>
    </footer>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
    </div>
  )
} 

export default Chat; 