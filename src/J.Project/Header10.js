
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';
function Header10() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post("http://localhost:5555/users/authenticate", {
        email,
        password,
      });

      if (response.data.status === 'success') {
        localStorage.setItem('token', response.data.token); // store token
        alert('Login successful!');
        // Navigate to dashboard or home
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error(err);
      setError('Server error');
    }
  };

  return (
    <div>
      <div class="container">
        <div class="row">
        <div class="col-sm-12 col-md-6 " >
     <span className='font-semibold text-2xl '>CUSTOMER LOGIN</span>
     <p className='text-sm font-normal  mt-3'>REGISTERED ACCOUNT</p>
     <hr className='w-100 mt-4'/>
     <p className=' text-xs font-semibold mt-3'>If you have an account, sign in with your email address.</p>
     <p className="mt-3 font-bold after:content-['*'] after:text-red-600 after:text-xl ">Email</p>
     <Form.Control className='mt-4 rounded-none'
         type="text"
         id="inputPassword5"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         aria-describedby="passwordHelpBlock"
       />
        <p className="mt-3  font-bold after:content-['*'] after:text-red-600 after:text-xl ">password</p>
        <Form.Control
        className="mt-3 rounded-none"
        type={showPwd ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       
      <input className="mt-4" type="checkbox" onChange={() => setShowPwd(!showPwd)} />
      <span className="text-sm font-semibold"> Show Password</span>
       <br/>
       <button         onClick={handleLogin} className='mt-3 border-2 border-black lg:w-24 p-1 hover:bg-black w-[25rem]    lg:ml-0 hover:text-white '>SIGN IN</button><span className='text-sm  font-bold lg:ml-2 ml-36 lg:mt-0 d-block'>Forgot Your Password?</span>
       {error && <p className="text-red-500 text-sm font-bold mt-3">{error}</p>}
       <p className="text-red-500 text-sm font-bold mt-3">Required Fields *</p>
 </div>

<div class="col-12 col-md-6 mt-11 ">
<span className='text-sm font-normal  '>New ACCOUNT</span>
 <hr className='w-100 mt-4'/>
 <p className=' text-xs font-semibold mt-3'>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
 <Link to="/Header13"><button className='mt-3 border-2 border-black lg:w-40 p-1 hover:bg-black w-[25rem] mb-4  lg:ml-0 hover:text-white'>Create an Account</button></Link>
</div>



        </div>
      </div>
    </div>
  )
}
export default Header10