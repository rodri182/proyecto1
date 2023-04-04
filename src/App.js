import React from "react";
import Inicio from "./pages/inicio";
import Menu from "./pages/menu";
import Atencion from "./pages/atencion";
import Chat from "./pages/chat";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Informacion from "./components/informacion";

function App() {
  return (
    <Router>
    <div className="App">
  <main>
  <Routes>
    <Route path="/" element= {<Inicio/>} />
    <Route path="/menu" element= {<Menu/>} />
    <Route path="/atencion" element= {<Atencion/>} />
    <Route path="/chat" element= {<Chat/>} />
    <Route path="/chat/:userid" element= {<Chat/>} />
    <Route path="/info" element= {<Informacion/>} />
    
  </Routes>
  </main> 
  </div>
</Router>
  
  );
}

export default App;
