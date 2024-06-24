//index route means the route should be included in the outlet of a layout
//writing a path without slash is relative paths and with slash is absolute path
//the arent route renders child routes by use of layout route 
//A link is just like a a tag containing the url when clicked without reloading the page when clickecd
//it can be styledd but there is no inline way to style like active links
//A navlink on the other end provides props to style in built like active links it can take a classname or style 
// query parameters show change in UI that is sorting,filtering and pagination
//usesearchparams search certain parameters we have .get() .toString to access it use ?
//In React Router, useSearchParams is a hook that allows you to read and modify the query string parameters in the URL.
//createbrowserrouter is a data api that takes route configuration and creates an instance
//loaders data fettching routing
//createroutesfromelements enhances route definition in jsx  it turn s routes into objects to  be readable
//routerprovider helps to set and manage routing it provides  routing context to your app,takes the instance
import { Route } from "react-router-dom";
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, {loader as VansLoader} from  "./pages/Vans";
import "./Server"
import VanDetail from "./pages/VanDetail";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import Hostlayout from "./Components/Hostlayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./Components/NotFound";
import Error from "./Components/Error";

const App = () => {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route 
    path="vans"
     element={<Vans />} 
     loader={VansLoader}
     errorElement={<Error/>}
      />
    <Route path="vans/:id" element={<VanDetail />} />
    
    <Route path="host" element={<Hostlayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Review />} />
      <Route path="vans" element={<HostVans />} />
      <Route path="vans/:id" element={<HostVanDetail />}>
        <Route index element={<HostVanInfo />} />
        <Route path="pricing" element={<HostVanPricing />} />
        <Route path="photos" element={<HostVanPhotos />} />
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