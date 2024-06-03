import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import "./Server"
import VanDetail from "./pages/VanDetail";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import Hostlayout from "./Components/Hostlayout";
function App() {
  return(
<div>

    <Routes>
      <Route element ={<Layout/>}>
      <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/vans" element={<Vans/>}/>
     <Route path="/host" element={<Hostlayout/>}/>
     
     <Route path="/host/income" element={<Income/>}/>
     <Route path="/host/review" element={<Review/>}/>
    <Route path="/vans/:id" element={<VanDetail/>}/>
     
     
      </Route>
  
</Routes>
</div>
  )
  
}

export default App;
