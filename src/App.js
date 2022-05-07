import './App.css'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { useState } from 'react'

function App() {
  const [passwordState, setPasswordState] = useState(false)
  const toggleBtn = () => {
    setPasswordState(prevState => !prevState)
  }
  return (
    <div className='container'>
        <div className='white-space'>
            <div className='form'>
            <h2>Let's set up your account</h2>
            <p>Already have an account?&nbsp;&nbsp;&nbsp;<span>Sign in</span></p>
            <div className='input-fields'>
            <input type="text" placeholder='Your name'/>
            <input type="text" placeholder='Email address'/>
            <select className='select-box'>
              <option disabled selected>I would describe this user type as</option>
              <option>authentic</option>
              <option>false</option>
            </select>
            <div className='password-input'>
            <input type={passwordState ? 'text' : 'password'} placeholder='Password' />
            <button onClick={toggleBtn}>{passwordState ? <AiFillEyeInvisible fontSize={15}/> :  <AiFillEye fontSize={15}/> }</button>
            </div>
            <p>Minimum 8 characters</p>
            <button className='btn-lg'>Next</button>
            </div>
            <p className='footer-text'>By clicking the "Next" button, you agree to creating a free account, and to <span>Terms of Service</span> and <span>Privacy Policy</span></p>
            </div>
        </div>
        <div className='blue-space'>
            <div className='writeup'>
              <h2>Dummy Heading</h2>
              <p>Lorem ipsum dolor sit amet, consectutor<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna<br/>aliqua.</p>
            </div>
        </div>
    </div>
  );
}

export default App;
