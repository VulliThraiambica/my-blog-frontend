import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Home from './components/Home'
import Login from "./components/Login"
import Adminprofile from "./components/Adminprofile"
import Authorprofile from "./components/Authorprofile"
import Userprofile from "./components/Userprofile"
import Rootlayout from './components/Rootlayout'
import Register from './components/Register'
import Writearticle from './components/Writearticle'
import Authorarticle from "./components/Authorarticle"
import Articlebyid from './components/Articlebyid'
import Editarticle from "./components/Editarticle"
import {Toaster} from "react-hot-toast"
import ProtectedRoute from './components/Protectdroute'
import Unauthorised from "./components/Unauthorised"
function App() {
const routerobj= createBrowserRouter([
  {
    path:"/",
    element:<Rootlayout/>,
    children:[
      { path:'', element:<Home/> },
      { path:"login", element:<Login/> },
      { path:"register", element:<Register/> },
      { 
        path:"user-profile", 
        element:(
          <ProtectedRoute allowedRoles={["user"]}>
            <Userprofile/>
          </ProtectedRoute>
        )
      },
      { 
        path:"author-profile", 
        element:(
          <ProtectedRoute allowedRoles={["author"]}>
            <Authorprofile/>
          </ProtectedRoute>
        ),
        children:[
          {index:true, element:<Authorarticle/>},
          {path:"articles", element:<Authorarticle/>},
          {path:"write-article", element:<Writearticle/>},
        ]
      },
      { path: "unauthorised", element: <Unauthorised/> },
      { path:"admin-profile", element:<Adminprofile/> },
      { path:"article/:id", element:<Articlebyid/> },
      { path:"edit-article", element:<Editarticle/> },
    ]
  }
])
  return (
<div>
  <Toaster position='top-center' reverseOrder={false}/>
<RouterProvider router={routerobj}/></div>
  )
}

export default App