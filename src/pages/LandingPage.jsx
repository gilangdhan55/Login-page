import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";  
import { useEffect } from "react";

const LandingPage = () => {
    useEffect(() => {
        document.documentElement.style.fontFamily = "'Inter', sans-serif";

        document.body.classList.add('overflow-hidden');
        return () => {
          // Cleanup biar nggak ngaruh ke halaman lain kalau komponen unmount
          document.body.classList.remove('overflow-hidden');
        };
    }, []);
    
    return <>
        <div className="dark:bg-slate-900 min-h-screen w-full flex flex-col">
            <Navbar />

            <Outlet />
        </div>
    </>;
  };
  
export default LandingPage;
  