import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => { 
  const [isSignInForm, setIsSignInForm]=useState(true)
  const ToggleSignInForm =()=>{
  setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      
        <Header/>
       <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/7d6db5f6-834f-47bc-ae74-340282d7083b/PK-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
       </div>
       <form className= 'bg-black absolute p-12 w-3/12 mt-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='text-xl font-bold mb-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text"
         placeholder='Name'
          className='p-2 my-2 w-full  bg-gray-800  rounded'/>}
          
        <input type="text"
         placeholder='Email'
          className='p-2 my-2 w-full  bg-gray-800  rounded'/>

        <input type="text"
         placeholder='Password'
          className='p-2 my-2 w-full bg-gray-800 rounded'/>

        <button className='p-4 mt-7 my-2 bg-red-800 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className=' cursor-pointer' onClick={ToggleSignInForm}>
        {isSignInForm ? "New to netflix ? SignUp Now" : "Already registered? SignIn now"}
          </p>
       </form>
    </div>
  )
}

export default Login