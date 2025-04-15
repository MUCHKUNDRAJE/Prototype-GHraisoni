import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import ProtectedRoute from "./utils/middleware";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Team from "./routes/team";
import AuthCallback from "./routes/callback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
           <Route
          path="/team"
          element={
            <ProtectedRoute>
              <Team />
            </ProtectedRoute>
          }
        />
      <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
