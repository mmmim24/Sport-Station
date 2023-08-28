import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export const Payment = () => {
  const [user,setUser] = React.useState('');
  const navigate = useNavigate();
  React.useEffect(()=>{
    axios.post('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          setUser(res.data.user);
          console.log('payment');
          return;
        }
        else{
          navigate('/');
        }
      })
      .catch(err=>console.log(err));
  });
    return (
      <React.Fragment>
        <div className='container sec App bodi'>
          {user&&<div className='row'>
            <h2>Payment completed</h2>
            <h3>You will get your product in 3-5 days</h3>
          </div>} 
        </div>

      </React.Fragment>
    )
  }
  