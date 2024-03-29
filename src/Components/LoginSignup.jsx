import React from 'react'
import { useState } from 'react'
import './LoginSignup.css'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import person_icon from '../assets/person.png'
import date_icon from '../assets/date.png'


const LoginSignup = (props) => {

    const [status, setStatus]=useState("login")
    // hook used to check if password is strong
    const [Strong, setStrong]=useState(false)
    // to check if input has value
    const [inputValue, setInputValue] = useState('');
    // to check if confirm password matches the password entered
    const [Confirm, setConfirm]=useState('')
    // to check input in confirm password field
    const [confirmInput, setConfirmInput]=useState('')

    //check if email matches tha pattern
    const [emailStatus,setemailStatus]=useState()
    const [emailInput,SetemailInput]=useState('')
    const [showPassword, setShowPassword] = useState(false);

    function handleLogin(e){
        e.preventDefault()
        setStatus("login")
        console.log(status)
    }
    function handleSignup(e)
    {
        e.preventDefault()
       setStatus("sign-up")
       console.log(status)
    }
    // checking if password is strong

function isvalidPassword(password){
    let hasUppercase=/[A-Z]/.test(password)
    let hasLowercase=/[a-z]/.test(password)
    let hasNumber=/[0-9]/.test(password)
    let hasSpecialcase=/[^A-Za-z0-9]/.test(password)

    return hasLowercase && hasUppercase && hasNumber && hasSpecialcase
}
    //handling changes in the input

function handleChange(event){
    let password=(event.target.value)
    setInputValue(password)
    let state=isvalidPassword(password)
    console.log(state)
    setStrong(state)
}

//check if password is matching
function passwordMatch(event){
    let confirmPassword=(event.target.value)
    setConfirmInput(confirmPassword)
    let confirm_pass= inputValue===confirmPassword
    console.log(confirm_pass)
    confirm_pass?setConfirm(true):setConfirm(false)
   
}

// check if email is valid

function isemailValid(event){
    var gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    let emailInput=(event.target.value)
    SetemailInput(emailInput)
    let emailMatch= gmailPattern.test(emailInput)
    emailMatch?setemailStatus(true):setemailStatus(false)
}
//to show and hide password
const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    
    <div className='container'>
        <form action="">
            <div className='header'>{status==="login"?"Login":"Sign Up"}</div>
            <div className='underline'></div>
            {status==="login"?(<div></div>): (<>
                <div className='input-box'>
                <img src={person_icon} alt="user" />
                <input type="text" placeholder='Name' />
            </div>
            
             <div className='input-box '>
                    <img src={date_icon} alt="date icone" className='dateicon' />
                    <input type="date" placeholder='DOB' onFocus="clearDefaultText(this)" />
            </div>
            </>) }
           
            <div className='input-box'>
                <img src={email_icon} alt="emil-icon" />
                <input type="email" placeholder='email'onChange={isemailValid}/>
            </div>
            <div style={{color:"red"}} className='matchMessage'>{emailInput?emailStatus?"":"Invalid email":null}</div>
                 
                <div className='input-box'>
                    <img src={password_icon} alt="" />
                    <input type={showPassword ? 'text' : 'password'} placeholder='Password' onChange={handleChange} />
                    {status==="login"?(<></>):inputValue?(<div className="status" style={{backgroundColor:Strong?"rgba(0, 128, 0, 0.5)":"rgba(255, 0, 0, 0.5)"}}>{Strong?"strong":"weak"}</div>):null }
                    <span onClick={togglePasswordVisibility} className='show'>
                        {showPassword ? 'Hide' : 'Show'}
                    </span>
                </div>
                
                {status==="login"?(<></>):(<><div className='input-box'>
                    <img src={password_icon} alt="" />
                    <input type={showPassword ? 'text' : 'password'} placeholder=' Confirm Password' onChange={passwordMatch} />
                    <span onClick={togglePasswordVisibility} className='show'>
                        {showPassword ? 'Hide' : 'Show'}
                    </span>
                </div>
                <div className='matchMessage'>{ confirmInput?Confirm?"":"password does not match":null}</div>
                </>)
                
                }
                
                
                <div className='forgot-password'><span>{status==="login"?(<><span>forgot password</span><a href="">click here</a></>):null}</span></div>

                <div className='button'>
                    <button style={{backgroundColor:status==="sign-up"?"#42006C":"gray"}}onClick={handleSignup}>Sign Up</button>
                    <button style={{backgroundColor:status==="login"?"#42006C":"gray"}}onClick={handleLogin}>Login</button>
                </div>
         
            </form>
           

        
    </div>

  )
}

export default LoginSignup