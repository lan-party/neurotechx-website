import React from 'react'
import SignupButtons from './SignupButtons'

const LoginMessage = async () => {

  return (
    <div className='text-center pt-8'>
        <h1 className='text-3xl' >Welcome</h1>
        <p className='m-5'>Sign in using one of the options below to get started in the NeuroTechX community.</p>
        
        <SignupButtons />
        
    </div>
  )
}

export default LoginMessage
