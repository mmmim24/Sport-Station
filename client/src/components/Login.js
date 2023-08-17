import React from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
// import Validation  from '../LoginValidation';

export const Login = () => {
    // const [err,setErr] = React.useState({});
    const navigate = useNavigate();
    const [value,setValue] = React.useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        // setErr(Validation(value));
        setValue(value);
        if(value.email&&value.password){
            axios.post('http://localhost:3305/login',value)
                .then(res=>{
                    if(res.data==="SUCCESS"){
                        navigate('/products');
                    }else{
                        alert('Invalid username and password');
                    }
                }
                )
                .catch(err=>console.log(err));
        } 
    }

    const handleInput = (e) =>{
        // e.preventDefault();
        setValue(prev=>({
            ...prev,
            [e.target.name]:[e.target.value]
        }));
    }

  return (
    <React.Fragment>
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded-4'>
                <h3 className='text-center fw-bolder'>Log In</h3>
                <form action='post' onSubmit={handleSubmit}>
                    <div>
                        <label className='m-2 d-block fw-bolder' htmlFor='email'>Email</label>
                        <input className='m-2 d-block form-control rounded-4 border-3' 
                                name='email' 
                                type='email' 
                                placeholder='Enter Email' 
                                onChange={handleInput} 
                                required/>
                        {/* {err.email&&<span className='text-danger'>{err.email}</span>} */}
                    </div>
                    <div className='mb-3'>
                        <label className='m-2 d-block fw-bolder' htmlFor='password'>Password</label>
                        <input className='m-2 d-block form-control rounded-4 border-3' 
                                name='password' 
                                type='password' 
                                placeholder='Enter Password' 
                                onChange={handleInput}
                                required/>
                        {/* {err.password&&<span className='text-danger'>{err.password}</span>} */}
                    </div>
                    <button type='submit' className='m-2 d-block fw-bolder form-control btn btn-success rounded-4 border-0'>Login</button>
                    <div className='m-2 d-block fw-bolder'>Don't have an account?</div>
                    <Link to='/signup' className='m-2 d-block fw-bolder form-control btn btn-primary rounded-4 border-0'>Create account</Link>  
                </form>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Login;