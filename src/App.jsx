import illustration from './assets/img/illustration.svg';
import reactIcon from './assets/react.svg';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

import { useState } from 'react';

const LoginPage = () => {
  const [valueUser, setValueUser]           = useState('');
  const [valuePassword, setValuePassword]   = useState('');
  const [show, setShow] = useState(false);


  const handleLogin = () => {
    if(!valueUser || !valuePassword){
      alert('Silahkan Isi semua nya');
      return;
    }
  }
  
  return (
    <div className="flex h-screen overflow-hidden"> 
      <div className="w-full md:w-3/5 p-8 flex flex-col justify-center items-center bg-gray-50 px-10">  
       <div className='border border-gray-300 shadow rounded-lg p-10'>
          <div className="info mb-4 flex items-center flex-col w-full">
              <div className='flex items-center mb-4'>
                  <img src={reactIcon} alt="icon" />
                  <h3 className='md:text-md sm:text-sm font-bold bg-gradient-to-tr from-red-700 to-gray-400 text-transparent bg-clip-text ml-2 lg:text-2xl font-inter'>Pandurasa Kharisma</h3>
              </div> 
              <small className='text-semibold text-gray-400 mx-auto font-inter italic'>Login Before Continue</small>
            </div>
            <form className="w-full">
              <div className="relative mb-3"> 
                <input
                  type="text" 
                  className="w-full px-2 py-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 peer"
                  value={valueUser}
                  onChange={(e) => setValueUser(e.target.value)} 
                />
                <label className={`font-inter absolute px-1 text-sm transition-all rounded-full font-semibold peer peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-transparent peer-focus:text-sky-500 peer-focus:-top-2 peer-focus:left-3 peer-focus:bg-white ${valueUser ? '-top-2  left-3 text-sky-500 bg-white' : 'left-3 top-2 text-gray-400'}`}>
                  Username
                </label>
              </div> 
          
              <hr className="my-5"/>

              <div className="relative mb-3 flex items-center">  
                <input
                  type={show ? 'text' : 'password'} 
                  className="w-full px-3 py-1  border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 peer"
                  value={valuePassword}
                  onChange={(e) => setValuePassword(e.target.value)} 
                />
                  <button type='button' className='absolute right-2' onClick={() => setShow(!show)} >
                    {show ? (<EyeIcon className="h-5 w-5 text-gray-500 " />) :  <EyeSlashIcon className="h-5 w-5 text-gray-500 " />  } 
                  </button>
                  <label className={`font-inter absolute px-1 text-sm transition-all rounded-full font-semibold peer peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-transparent peer-focus:text-sky-500 peer-focus:-top-2 peer-focus:left-3 peer-focus:bg-white ${valuePassword ? '-top-2  left-3 text-sky-500 bg-white' : 'left-3 top-2 text-gray-400'}`}>
                    Password
                  </label> 
              </div> 

            
              <button className="w-full px-3 py-2 mt-5 bg-blue-500 text-white p-3 rounded-md text-sm hover:bg-blue-600 font-bold" type='button' onClick={handleLogin}>
                Sign in
              </button>
            </form>
       </div>
      </div>

      {/* Bagian Kanan: Gambar / SVG */}
      <div className="hidden sm:flex md:w-2/5 bg-blue-100 bg-blue-500 justify-center items-center">
        <img src={illustration} alt="Login Illustration" className="w-3/5" /> 
      </div>
    </div>
  );
};

export default LoginPage;
