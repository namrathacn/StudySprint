import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Goals from "./pages/Goals";
import Timer from "./pages/Timer";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";





function ProtectedRoute({ user, children }) {


  if (!user) {

    return <Navigate to="/login" replace />;

  }


  return children;


}







function App() {


  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);







  useEffect(() => {


    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {


        setUser(currentUser);

        setLoading(false);


      }
    );



    return unsubscribe;


  }, []);








  if (loading) {


    return (

      <div className="
      min-h-screen
      bg-[#020617]
      text-white
      flex
      items-center
      justify-center
      text-2xl
      ">

        Loading...

      </div>

    );


  }









  return (


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
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />






        <Route
          path="/tasks"
          element={
            <ProtectedRoute user={user}>
              <Tasks />
            </ProtectedRoute>
          }
        />






        <Route
          path="/goals"
          element={
            <ProtectedRoute user={user}>
              <Goals />
            </ProtectedRoute>
          }
        />







        <Route
          path="/timer"
          element={
            <ProtectedRoute user={user}>
              <Timer />
            </ProtectedRoute>
          }
        />







        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile />
            </ProtectedRoute>
          }
        />







        <Route
          path="/settings"
          element={
            <ProtectedRoute user={user}>
              <Settings />
            </ProtectedRoute>
          }
        />





        <Route
          path="*"
          element={<Navigate to="/" />}
        />




      </Routes>


    </BrowserRouter>


  );


}



export default App;