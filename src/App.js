import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Children } from "react";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftbar/LeftBar"
import RightBar from "./components/rightbar/RIghtBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import AboutUs from "./AboutUs";
import DonationPage from "./DonatePage";
import './style.scss';


function App() {
  const currentUser=true;

  const Layout =()=>{
    return (
      <div className="theme-light">
        <Navbar />
        <div style={{display:"flex"}}>
          <LeftBar />
          <div style={{flex:6}}>
          <Outlet />
          </div>   
        <RightBar/>
        </div>

      </div>
    )
  }

  const ProtectedRoute= ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {

          path:"/profile/:id",
          element:<Profile/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
       path:"/register",
       element: <Register/>,
    },
    {
      path:"/aboutus",
      element:<AboutUs/>   
    },
    {
      path:"/donationpage",
      element:<DonationPage/>
    },
  ]);

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
