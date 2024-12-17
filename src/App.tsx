import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "@/pages/frontend/Home"
import About from "@/pages/frontend/About"
import Team from "@/pages/frontend/Team"
import Project from "@/pages/frontend/Project"
import Register from "@/pages/auth/Register"
import Login from "@/pages/auth/Login"
import Dashboard from "@/pages/backend/Dashboard"
import Movies from "@/pages/backend/Movies"
import Genres from "@/pages/backend/Genres"
import Users from "@/pages/backend/Users"

import ProtectedRoute from "@/routers/ProtectedRoute"

// rfce
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Frontend Page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/projects" element={<Project />} />

        {/* Auth Page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Backend Page */}
        <Route path="/backend/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/backend/movies" element={
          <ProtectedRoute>
            <Movies />
          </ProtectedRoute>
        } />
        <Route path="/backend/genres" element={
          <ProtectedRoute>
            <Genres />
          </ProtectedRoute>
        } />
        <Route path="/backend/users" element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        } />

        {/* Notfound */}
        <Route path="*" element={<h1 className="flex justify-center items-center h-96">404 Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
