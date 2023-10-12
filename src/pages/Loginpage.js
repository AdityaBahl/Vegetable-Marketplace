import React from 'react'
import img from '../images/gobhi.png'
import '../css/Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Signin = () => {
  const [data, setData] = useState({
    fname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8081/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/")
      console.log(res.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
      }
    }

    const { fname, email, phone, password } = this.state;
    console.log(fname, email, phone, password);
  }
  const [isFocuseduser, setIsFocuseduser] = useState(false);
  const [isFocusedpass, setIsFocusedpass] = useState(false);
  const handleFocususer = () => {
    setIsFocuseduser(true);
  };
  const handleFocuspass = () => {
    setIsFocusedpass(true);
  };
  const handleBluruser = () => {
    setIsFocuseduser(false);
  };
  const handleBlurpass = () => {
    setIsFocusedpass(false);
  };
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  return (
    <div>
      <div className='Signin-form-container' style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <form onSubmit={handleSubmit} className='Signinform'>
          <h1 className='Signinh1'>SIGN IN</h1>
          {isFocuseduser ? (
            <label htmlFor="text-input">Enter your username:</label>
          ) : null}
          <input name="fname" value={data.fname} required onFocus={handleFocususer} onChange={handleChange} onBlur={handleBluruser} id='username' className='Signin-email-input' type="name" placeholder="Username" />
          {isFocuseduser ? (
            <label htmlFor="text-input">Enter your email:</label>
          ) : null}
          <input name="email" value={data.email} onFocus={handleFocususer} onChange={handleChange} onBlur={handleBluruser} id='email' className='Signin-email-input' type="email" placeholder="Email" />
          {isFocuseduser ? (
            <label htmlFor="text-input">Enter your Phone Number:</label>
          ) : null}
          <input name="phone" value={data.phone} onFocus={handleFocususer} onChange={handleChange} onBlur={handleBluruser} id='phone' className='Signin-email-input' type="phone" placeholder="Phone Number" />
          {isFocusedpass ? (
            <label htmlFor="text-input">Enter your Password:</label>
          ) : null}
          <input name="password" value={data.password} onFocus={handleFocuspass} onChange={handleChange} onBlur={handleBlurpass} className='Signin-password-input' type="password" placeholder="Password" />
          {error && <div>{error}</div>}
          <button className='submit-butt' type='submit'><Link to='/'>Next</Link></button>
          <p className='Signin-p'>Already have an account ? <br /><br /><Link to="/login">CLICK HERE</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signin
