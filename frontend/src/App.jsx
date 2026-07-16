import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";

import Tasks from "./pages/Tasks";

import Timer from "./pages/Timer";

import Register from "./pages/Register";



function App() {


    return (

        <Routes>


            <Route path="/" element={<Home />} />


            <Route path="/dashboard" element={<Dashboard />} />


            <Route path="/tasks" element={<Tasks />} />


            <Route path="/timer" element={<Timer />} />


            <Route path="/register" element={<Register />} />


        </Routes>

    );


}


export default App;