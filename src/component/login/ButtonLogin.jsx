const ButtonLogin = ({handleLogin}) => {
    return (<button className="w-full px-3 py-2 mt-5 bg-blue-500 text-white p-3 rounded-md text-sm hover:bg-blue-600 font-bold" type='button' onClick={handleLogin}>
      Sign in
    </button>);
}

export default ButtonLogin;