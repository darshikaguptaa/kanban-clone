import { useState } from "react";
import Sidebar from "./components/SideBar/SideBar";
import Navbar from "./components/NavBar/NavBar";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
    return (
        <>
            <div className="app">
                <Sidebar />
                <Main />
            </div>
        </>
    );
}

export default App;
