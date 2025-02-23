import { Routes, Route } from "react-router-dom"; 

import LoginPage from "./pages/auth/Login";
import Home from "./pages/home/Home";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/home" element={<Home />} /> 
      </Routes>
    </>
  );
}

export default App; 
