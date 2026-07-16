import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Tasks from "./pages/Tasks";

import Goals from "./pages/Goals";

import Timer from "./pages/Timer";

import Profile from "./pages/Profile";

import Settings from "./pages/Settings";





function App(){


return(


<BrowserRouter>


<Routes>


<Route

path="/"

element={<Home />}

/>



<Route

path="/login"

element={<Login />}

/>



<Route

path="/register"

element={<Register />}

/>



<Route

path="/dashboard"

element={<Dashboard />}

/>



<Route

path="/tasks"

element={<Tasks />}

/>



<Route

path="/goals"

element={<Goals />}

/>



<Route

path="/timer"

element={<Timer />}

/>



<Route

path="/profile"

element={<Profile />}

/>



<Route

path="/settings"

element={<Settings />}

/>



</Routes>


</BrowserRouter>


);


}


export default App;