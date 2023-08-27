import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Log = () => {
  const [user,setUser] = React.useState('');
  const navigate = useNavigate();
  React.useEffect(()=>{
    axios.get('http://localhost:3305')
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
            <h2>Order Placed succesfully on COD method</h2>
            <h3>You will get your product in 3-5 days</h3>
            <h3>Pay the delivery carrier</h3>
          </div>} 
        </div>

      </React.Fragment>
    )
  }

export default Log;