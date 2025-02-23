import PageLoginLeft from "../../component/login/PageLoginLeft";
import Form from "../../component/login/FormLogin";
 
const PageLoginRight = () => {   
  return (
    <div className="w-full md:w-3/5 p-8 flex flex-col justify-center items-center bg-gray-50 px-10 shadow border-l-2 border-slate-500">  
       <div className='border border-gray-300 shadow rounded-lg p-10'>
          <div className="info mb-4 flex items-center flex-col w-full">
              <div className='flex items-center mb-4'>
                  <img src="./public/images/logopk.png" className='mix-blend-multiply rounded-full w-10' alt="icon" />
                  <h3 className='md:text-md sm:text-sm font-bold bg-gradient-to-tr from-red-700 to-gray-400 text-transparent bg-clip-text ml-2 lg:text-2xl font-inter'>Pandurasa Kharisma</h3>
              </div> 
              <small className='text-semibold text-gray-400 mx-auto font-inter italic'>Login Before Continue</small>
            </div>
            <Form />
       </div>
      </div> );
}

const LoginPage = () => {  
  return (
    <div className="flex h-screen overflow-hidden">  
      <PageLoginLeft />

      <PageLoginRight />  
    </div>
  );
};

export default LoginPage;
