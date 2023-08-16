import React from 'react';

export const Login = () => {
  return (
    <React.Fragment>
        <div className='d-flex justify-content-center align-content-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action=''>
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='Enter Email'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='Enter Password'/>
                    </div>
                    <button className='success'>Login</button>
                </form>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Login;