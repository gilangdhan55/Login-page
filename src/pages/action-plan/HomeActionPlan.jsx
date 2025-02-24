import Home from '../../component/action-plan/Home'; 
import { useState, useEffect } from "react"; 
import { IconCircle, IconCircleDot, IconHome } from "@tabler/icons-react"; 
import { Link } from "react-router-dom";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });


  useEffect(() => {
    const isDark = darkMode === false; 
    document.documentElement.classList.toggle("dark", !isDark); 
    localStorage.setItem("theme", `${!isDark ? "dark" : "light"}`); 
  }, [darkMode]);
 

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-200 dark:bg-gray-900 text-black dark:text-white rounded hidden"
    >
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};
 
const SideBarHeader = ({sidebarCollapse, setSidebarCollapse}) => {
    return (
        <div className="flex items-center justify-between h-[64px] pt-4 pr-4 pb-0 pl-4" id="app-header"> 
            <div id="app-logo" className='w-[50px]'>
                <img src="/images/pklogo.png" alt="logo-pk" className="w-[50px] min-w-[50px] h-auto object-contain" />
            </div>
            <div className={`font-bold font-sans text-nowrap w-full text-lg`} id="app-text">
                ACTION PLAN    
            </div>
            
            <button type="button" className={`p-0 hover:text-gray-100 ${sidebarCollapse ? 'hidden' : ''}`} aria-controls="sidebar" aria-expanded={sidebarCollapse} onClick={() => setSidebarCollapse(!sidebarCollapse)}>
                {sidebarCollapse ? <IconCircle size={20} stroke={2} className="text-gray-400" /> : <IconCircleDot size={20} stroke={2} className="text-gray-400" />} 
            </button>
        </div>
    )
}
 
const SideBar = () => { 
    const [sidebarCollapse, setSidebarCollapse] = useState(() => {
        return localStorage.getItem("sidebar") === 'on';
    }); 
    const [isHover, setIsHover] = useState(false);
    const lengthMap = Array.from({length: 5}); 

    useEffect(() => {
        document.documentElement.classList.toggle("is-collapse", sidebarCollapse);
        localStorage.setItem("sidebar", sidebarCollapse ? "on" : "off");
        if(!sidebarCollapse) document.documentElement.classList.remove('collapse-hover');
    }, [sidebarCollapse]);
      
    const handleSideBarHove = (isOn) =>{
        if(!sidebarCollapse) return;  
        console.log('ok')
        document.documentElement.classList.toggle('collapse-hover', isOn);
    }

    return <>
      <aside 
      className={`flex flex-col bg-gray-100 dark:bg-[#25293c] dark:text-slate-200 shadow shadow-slate-600 
        w-[16.25rem] transition-all duration-300 fixed overflow-hidden h-screen
        `}
        id="sidebar"
        onMouseEnter={() => handleSideBarHove(setIsHover(true))}
        onMouseLeave={() => handleSideBarHove(setIsHover(false))}
        >
           <SideBarHeader sidebarCollapse={sidebarCollapse} setSidebarCollapse={setSidebarCollapse} />

           <ul className='menu-inner overflow-y-auto overflow-x-hidden flex-grow-1 h-screen py-2 px-4 pb-[4.3rem] relative'>
                <li className='menu-item my-2 mx-0 will-change-transform'>
                    <Link to='/action-plan' className="menu-link text-base my-0 mx-[-7px] active flex items-end px-4 py-2 rounded-md relative" >
                        <IconHome className='menu-icon mr-2 min-w-[22px] w-[22px] object-contain'   /> 
                        <span className='menu-text text-ellipsis whitespace-nowrap leading-[1.467] overflow-hidden font-semibold'>Home</span>
                    </Link>
                </li>
                <li className='menu-header transition-opacity duration-300 ease-in-out  my-0 mx-[-5px] flex items-end text-base uppercase px-4 py-2 text-xs'>
                    <span className='menu-header-text uppercase tracking-[0.4px] whitespace-nowrap text-gray-500 font-semibold'>Action Plan</span>
                </li>
                {lengthMap.map((item, index) => (
                    <li key={index} className='menu-item my-2 mx-0 will-change-transform'>
                        <Link to='/action-plan' className="menu-link text-base my-0 mx-[-7px] flex items-end px-4 py-2 rounded-md relative" >
                            <IconHome className='menu-icon mr-2 min-w-[22px] w-[22px] object-contain'   /> 
                            <span className='menu-text text-ellipsis whitespace-nowrap leading-[1.467] overflow-hidden font-semibold'>Home</span>
                        </Link>
                    </li>
                ))} 
           </ul>
        </aside> 
    </>;
};

const LayoutPage = () => { 
    return <></>;
};

const HomeActionPlan = () => { 
    
    useEffect(() => {
        document.documentElement.classList.add("dashboard-action-plan"); 
    });
    return <>
        <div className="bg-gray-200 text-slate-900 dark:bg-[#2f3349] dark:text-slate-200  min-h-screen w-full flex overflow-hidden">
             <DarkModeToggle />
             
             <SideBar />
            <LayoutPage /> 
        </div>
    </>;
};
  
export default HomeActionPlan;
  
