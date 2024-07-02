//index route means the route should be included in the outlet of a layout
//writing a path without slash is relative paths and with slash is absolute path
//the arent route renders child routes by use of layout route 
//A link is just like a a tag containing the url when clicked without reloading the page when clickecd
//it can be styledd but there is no inline way to style like active links
//A navlink on the other end provides props to style in built like active links it can take a classname or style 
// query parameters show change in UI that is sorting,filtering and pagination

//createbrowserrouter is a data api that takes route configuration and creates an instance
//loaders data fettching routing
//createroutesfromelements enhances route definition in jsx  it turn s routes into objects to  be readable
//routerprovider helps to set and manage routing it provides  routing context to your app,takes the instance
//errorelement rendered when an error occurs during rendering a route

import { Route } from "react-router-dom";
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, {loader as VansLoader} from  "./pages/Vans";
import "./Server"
import "./Styles.css"
import VanDetail,  {Loader as vanDetailsLoader}from "./pages/VanDetail";
import Layout from "./Components/Layout";
import Dashboard , {loader as dashboardLoader} from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import Hostlayout from "./Components/Hostlayout";
import HostVans , {Loader as hostVanLoader}from "./pages/Host/HostVans";
import HostVanDetail, {Loader as  hostVanDetailsLoader} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./Components/NotFound";
import Error from "./Components/Error";
import { requireAuth } from "./Components/Utilies";
import Login, {Loader as loginLoader, Action as loginAction} from "./Components/Login";
const App = () => {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
    path="login"
    element={<Login/>}
    loader={loginLoader}
    action={loginAction}
    />
    <Route 
    path="vans"
     element={<Vans />} 
     loader={VansLoader}
     errorElement={<Error/>}
      />
    <Route 
    path="vans/:id"
     element={<VanDetail />}
     loader={vanDetailsLoader}
     errorElement={<Error/>}
     />
    
    <Route path="host" element={<Hostlayout />}>
      <Route 
      index 
      element={<Dashboard />} 
      loader={dashboardLoader}
      />
      <Route 
      path="income" 
      element={<Income />}
      loader={async({request})=>await requireAuth({request})}
      />
      <Route 
      path="reviews"
       element={<Review />}
       loader={async({request})=>await requireAuth({request})}
       />
      <Route 
      path="vans" 
      element={<HostVans />}
      loader={hostVanLoader}
      errorElement={<Error/>}
      />
      <Route 
      path="vans/:id" 
      element={<HostVanDetail/>}
      loader={hostVanDetailsLoader}
      errorElement={<Error/>}
      >
        <Route 
        index
         element={<HostVanInfo />} 
         loader={async(request)=>await requireAuth(request)}
       />
        <Route 
        path="pricing"
         element={<HostVanPricing />}
         loader={async(request)=>await requireAuth(request)}
          />
        <Route 
        path="photos" 
        element={<HostVanPhotos />} 
        loader={async(request)=>await requireAuth(request)}
        />
      </Route>
    </Route>
    <Route path="*" element={<NotFound/>}/>
  </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App