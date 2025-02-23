import illustration from '../../assets/img/illustration.svg';


const PageLoginLeft = () => {
    return (<div className="hidden sm:flex md:w-2/5 bg-slate-600 justify-center items-center flex-col ">
      <div className="text-welcome w-100">
        <span className='text-2xl font-bold text-white font-inter text-center mb-3 typing px-4'>Welcome Back</span>
      </div>
      <img src={illustration} alt="Login Illustration" className="w-3/5" /> 
    </div>);
}

export default PageLoginLeft;