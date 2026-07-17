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


import ProtectedRoute from "./components/ProtectedRoute";





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

element={

<ProtectedRoute>

<Dashboard />

</ProtectedRoute>

}

/>







<Route

path="/tasks"

element={

<ProtectedRoute>

<Tasks />

</ProtectedRoute>

}

/>







<Route

path="/goals"

element={

<ProtectedRoute>

<Goals />

</ProtectedRoute>

}

/>







<Route

path="/timer"

element={

<ProtectedRoute>

<Timer />

</ProtectedRoute>

}

/>







<Route

path="/profile"

element={

<ProtectedRoute>

<Profile />

</ProtectedRoute>

}

/>







<Route

path="/settings"

element={

<ProtectedRoute>

<Settings />

</ProtectedRoute>

}

/>







</Routes>


</BrowserRouter>


);


}


export default App;