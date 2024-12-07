import { Route,Routes,BrowserRouter } from "react-router-dom"
import Home from "@/pages/frontend/Home"
import About from "@/pages/frontend/About"
import Project from "@/pages/frontend/Project"
import Team from "@/pages/frontend/Team"

function App() {
  return (


    <BrowserRouter>
  
  <Routes>
    <Route>

     <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/projects" element={<Project />}/>
     <Route path="/teams" element={<Team />}/>

    
    </Route>
  </Routes>
  </BrowserRouter>
  
  )
}

export default App
