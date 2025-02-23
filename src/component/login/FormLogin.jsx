import { useState } from 'react';  
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import ButtonLogin from './ButtonLogin';

const fetchData = async (api, config) => {
    try {
        const response = await fetch(api, config);
        const res      = await response.json(); 
        const status   = await response.status;
        return {res, status};
    } catch (error) {
        return error
    }
} 

const Form = () => {
    const [valueUser, setValueUser]           = useState('');
    const [valuePassword, setValuePassword]   = useState('');
    const [show, setShow] = useState(false);
  
    const handleLogin = async () => {
      if(!valueUser || !valuePassword){
        alert('Silahkan Isi semua nya');
        return;
      }
  
      const config   = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: valueUser,
          password: valuePassword
        }),
        credentials: "include" 
      }
  
      const {res, status} = await fetchData('http://103.169.73.3:3000/api/login', config); 
  
      if(status === 200){
        
         return;
      }
  
      if(!res.status){
        alert(res.message);
        return;
      } 
    }
  
    const handleLoad = async () => {
      const config   = {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      } 
      const response = await fetchData('http://103.169.73.3:3000/sftp/list_customers', config); 
    }

    return (
        <form className="w-full">
        <div className="relative mb-3"> 
          <input
            type="text" 
            className="w-full px-2 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 peer"
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
            className="w-full px-3 py-2  border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 peer"
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
        
        <ButtonLogin handleLogin={handleLogin} /> 
      </form>
    );
}

export default Form;