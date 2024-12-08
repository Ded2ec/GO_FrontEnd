import { Route,Routes,BrowserRouter } from "react-router-dom"
import Home from "@/pages/frontend/Home"
import About from "@/pages/frontend/About"
import Project from "@/pages/frontend/Project"
import Team from "@/pages/frontend/Team"
import Login from "@/pages/auth/Login"
import Register from "@/pages/auth/Register"

function App() {
  return (


    <BrowserRouter>
  
  <Routes>
    <Route>

     {/* Front Page  */}
     <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/projects" element={<Project />}/>
     <Route path="/teams" element={<Team />}/>

     {/* Auth Page  */}
     <Route path="/login" element={<Login />}/>
     <Route path="/register" element={<Register />}/>

    </Route>
  </Routes>
  </BrowserRouter>
  
  )
}

export default App
