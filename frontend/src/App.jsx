import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./pages/firebase";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Goals from "./pages/Goals";
import Timer from "./pages/Timer";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";



function ProtectedRoute({children}){


const token = localStorage.getItem("token");


if(!token){

return <Navigate to="/login" />;

}


return children;


}





function App(){


const [loading,setLoading] = useState(true);



useEffect(()=>{


const unsubscribe = onAuthStateChanged(
auth,
(user)=>{


setLoading(false);


});


return unsubscribe;


},[]);





if(loading){


return(

<div className="
min-h-screen
bg-[#020617]
text-white
flex
items-center
justify-center
text-2xl
">

Loading StudySprint...

</div>

);


}






return(

<BrowserRouter>


<Routes>


<Route path="/" element={<Home/>}/>


<Route path="/login" element={<Login/>}/>


<Route path="/register" element={<Register/>}/>





<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard/>
</ProtectedRoute>
}
/>





<Route
path="/tasks"
element={
<ProtectedRoute>
<Tasks/>
</ProtectedRoute>
}
/>





<Route
path="/goals"
element={
<ProtectedRoute>
<Goals/>
</ProtectedRoute>
}
/>





<Route
path="/timer"
element={
<ProtectedRoute>
<Timer/>
</ProtectedRoute>
}
/>





<Route
path="/profile"
element={
<ProtectedRoute>
<Profile/>
</ProtectedRoute>
}
/>





<Route
path="/settings"
element={
<ProtectedRoute>
<Settings/>
</ProtectedRoute>
}
/>


</Routes>


</BrowserRouter>


);


}



export default App;