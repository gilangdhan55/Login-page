import { Routes, Route } from "react-router-dom"; 

import LoginPage from "./pages/auth/Login";
import Home from "./pages/home/Home";
import Coba from "./pages/d/Coba";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coba />} />
        <Route path="/home" element={<Home />} /> 
      </Routes>
    </>
  );
}

export default App;
