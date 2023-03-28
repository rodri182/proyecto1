import React from "react";
import {Link} from "react-router-dom";
import {ChevronLeftIcon, PuzzlePieceIcon,ChartBarSquareIcon, UserCircleIcon, Cog6ToothIcon, EnvelopeIcon, ArrowLeftOnRectangleIcon}from '@heroicons/react/24/solid';

function Menu ({ test }) {
    const close = () => {
        test()
    }

return (
<body class="h-full w-1/4 bg-[#2A3342] box-border box-content">
    <header class=" w-full flex justify-between h-20 bg-[#333F51] pt-4 pb-2 sticky top-0 shadow-[#00000040] shadow-xl">
        
        <div class="flex justify-center">
           <img src={require(`../assets/img/logotipo.png`)} class="ml-6" alt="logo"/>
        </div>
        <div class="flex justify-end  mr-6" onClick={close}>
            <Link to="#" class="h-12 w-12 rounded-full bg-[#404F65] ">
                <ChevronLeftIcon class="h-6 w-6 my-3 ml-3 text-bold text-white " alt="arrow"/>
            </Link>
        </div>
    </header>
    <main class="h-full bg-[#2A3342] p-4 mt-4">
        <section class="pb-6 mr-6">
            <button  class="text-black w-full bg-white hover:bg-violet-200 focus:ring-4 focus:outline-none focus:ring-violet-500 font-medium rounded-lg text-sm py-2.5 ml-2 inline-flex justify-between" type="button"> <PuzzlePieceIcon class="ml-2 h-8 w-8 text-fuchsia-600"  alt="icon"/><p class="mt-2 "> Server Name </p>
                <svg class="w-4 h-4 mr-2 flex justify-end mt-2 " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">   
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
        </button>
            <div id="dropdownDelay" class="z-10 hidden bg-white rounded-lg  w-44 ">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-500" aria-labelledby="dropdownDelayButton">
                    <li>
                        <Link to="#" class="block px-4 py-2 hover:bg-violet-200 ">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="#" class="block px-4 py-2 hover:bg-violet-200 ">Settings</Link>
                    </li>
                    <li>
                        <Link to="#" class="block px-4 py-2 hover:bg-violet-200 ">Earnings</Link>
                    </li>
                    <li>
                        <Link to="#" class="block px-4 py-2 hover:bg-violet-200 ">Sign out</Link>
                    </li>
                </ul>
            </div>

        </section>
        <section>
            <h1 class="text-lg py-2 text-[#BBC3CF]">MAIN MENU</h1>
            <div class="flex justify-start py-2 hover:bg-violet-900 active:bg-slate-800 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">
                <Link to="#">
                    <ChartBarSquareIcon class="inline-block mr-2 ml-6 h-8 w-8 text-fuchsia-600"  alt="graph"/>
                    <span class=" text-[#BBC3CF]">Dashboard</span>
                </Link>
            </div>
            <div class="flex justify-start py-2 hover:bg-violet-900 active:bg-slate-800 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">
                <Link to="#">
                    <UserCircleIcon class="inline-flex mr-2 ml-6 h-8 w-8 text-white " alt="perfil"/>
                    <span class="text-[#BBC3CF]">Perfil</span>
                </Link>
            </div>
            <div class="flex justify-start py-2 hover:bg-violet-900 active:bg-slate-800 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">
                <Link to="#">
                    <Cog6ToothIcon class="inline-flex mr-2 ml-6 h-8 w-8 text-white" alt="setting"/>
                    <span class="text-[#BBC3CF]">Configuracion</span>
                </Link>
            </div>
        </section>
        <section>
            <h1 class="text-lg py-2 text-[#BBC3CF]">TICKETS</h1>
            <div class="flex justify-start py-2 hover:bg-violet-900 active:bg-slate-800 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">
                <Link to="#">
                    <EnvelopeIcon class="inline-flex mr-2 ml-6 h-8 w-8 text-white" alt="add-mail"/>
                    <span class="text-[#BBC3CF]">Pendientes</span>
                </Link>
            </div>
            <div class="flex justify-start py-2 hover:bg-violet-900 active:bg-slate-800 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">
                <Link to="#">
                    <EnvelopeIcon class="inline-flex mr-2 ml-6 h-8 w-8 text-white" src="./assets/icons/aproved-mail.svg" alt="approved-mail"/>
                    <span class="text-[#BBC3CF]">Atendiendo</span>
                </Link>
            </div>
            <div class="flex justify-startpy-2 hover:bg-violet-900 active:bg-slate-800 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">
                <Link to="#">
                    <EnvelopeIcon class="inline-flex mr-2 ml-6 h-8 w-8 text-white" src="./assets/icons/aproved-mail.svg" alt="approved-mail"/>
                    <span class="text-[#BBC3CF]" >Cerrados</span>
                </Link>
            </div>
        </section>
    </main>
    <footer class=" bg-[#333F51] w-full p-4 flex justify-end bottom-0 shadow-[#00000040] shadow-[0_-4px_4px] ">
        <div class="container w-40 mr-6 flex justify-center border-2 rounded-lg border-red-500 ">
            <Link to="#"class="border-red-500">
                <ArrowLeftOnRectangleIcon class="relative top-4 right-6 h-8 w-8 text-white text-white" src="./assets/icons/logout.svg" alt="logout"/>
                <span class="text-red-500 relative bottom-3  text-lg font-semibold ml-4">LOGOUT</span>
            </Link>
        </div>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
</body>
)
}

export default Menu;