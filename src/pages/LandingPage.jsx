import Navbar from "../component/Navbar";
import ContentCard from '../component/card/CardApp';

const LandingPage = () => {
  
    return <>
        <div className="bg-slate-900 h-screen w-full overflow-hidden"> 
            <Navbar />

            <ContentCard />
        </div>
    </>;
  };
  
export default LandingPage;
  