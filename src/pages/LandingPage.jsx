import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";  

const LandingPage = () => {
  
    return <>
        <div className="bg-slate-900 min-h-screen w-full flex flex-col">
            <Navbar />

            <Outlet />
        </div>
    </>;
  };
  
export default LandingPage;
  