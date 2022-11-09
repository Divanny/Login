import React from 'react';
import './App.css';

import Google from './assets/google.png'
function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  let newDate = new Date()
  let year = newDate.getFullYear();

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
      Remember: ${remember}
    `);
    
    event.preventDefault();
  }

  const handlePassword = (event) => {
    setShowPassword(!showPassword);
  } 

  return (
    <div className='container d-flex align-items-center content'>
      <div className = 'upper-layer'>
        <div className='row'>
          <div className='col' >
            <div className='content-container'>
              <div className='header-container'>
                <div className='title'>Welcome back</div>
                <div className='subtitle'>Welcome back! Please enter your details</div>
              </div>
              <div className='form-container'>
                <div className='input-group'>
                  <label className='input-title'>Email</label>
                  <input
                    name='email'
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required className='input-item'/>
                </div>
                <div className='input-group'>
                  <label className='input-title'>Password</label>
                  <div className="password-container">
                    <input
                      name='password'
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Enter your password'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required className='input-item'/>
                      <i className={showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} onClick={handlePassword} style={{ "--fa-animation-duration": "3s", "--fa-animation-iteration-count": "5", "--fa-animation-timing": "ease-in-out" }}></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between remember-container">
                  <div className="remember vertical-align-center">
                    <label><input type="checkbox" className='checkbox-round' onChange={e => setRemember(e.target.value)}/> Remember for 30 days</label>
                  </div>
                  <div className="forgot">Forgot password</div>
                </div>
                <button className='button' onClick={handleSubmit}><span>Sign in </span></button>
                <button className='button google'>
                  <img width='20px' style={{marginBottom: '3px', marginRight: '5px'}} alt='Google sign-in' src={Google} />
                  <span>Sign in with Google</span>
                </button>
              </div>
              <div className='footer-container text-center'>
                <div className='footer-text'>Don't have an account?<span>Sign up</span></div>
              </div>
            </div>
          </div>
          <div className='col-6 img-container'>
            <div className='side-img'/>
          </div>
        </div>
      </div>
      <div className="credits">
        © {year} <a href='https://divanny.github.io/'>Divanny Pérez</a>. All rights reserved.
      </div>
    </div>
  );
} 

export default App; 
