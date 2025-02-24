import { Routes, Route } from "react-router-dom"; 

import LoginPage from "./pages/auth/Login";
import Home from "./pages/home/Home";
import LandingPage from "./pages/LandingPage";
import HomeActionPlan from "./pages/action-plan/HomeActionPlan";
import ListApplication from "./pages/ListApplication";
import ContentCarousel from "./component/card/CardApp";

function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} > 
          <Route index element={<ContentCarousel />} />
          <Route path="aplication" element={<ListApplication />} />
        </Route>
        <Route path="/action-plan" element={<HomeActionPlan />} />
      </Routes>
    </>
  );
}

export default App; 
