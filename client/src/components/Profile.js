import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export const Profile = () => {
  const [user,setUser] = React.useState([]);
  const [name,setName] = React.useState('');
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  React.useEffect(()=>{
    axios.get('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          setName(res.data.user);
          console.log('Profile');
          return;
          // navigate('/products');
        }
        else{
          // navigate('/login');
        }
      })
      .catch(err=>console.log(err));
  });
  React.useEffect(()=>{
    axios.get('http://localhost:3305/profile',name)
    .then(res=>{
      console.log(res.data);
      setUser(res.data)
    })
    .catch(err=>console.log(err))
  },[])
    return (
      <React.Fragment>
        <div className='App bodi'>Profile{name}</div>
      </React.Fragment>
    )
  }