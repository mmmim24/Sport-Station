import React from 'react'

export const Login = () => {
  return (
    <React.Fragment>
        <div>
            <div>
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