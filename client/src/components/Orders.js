import React from 'react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Orders = () => {
  const [id,setId] = React.useState('');
  const [role,setRole] = React.useState('');
  const [user,setUser] = React.useState('');
  const [orders,setOrders] = React.useState([]);
  const [uorders,setUorders] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(()=>{
    axios.get('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          setId(res.data.id);
          setRole(res.data.role);
          setUser(res.data.user);
          return;
          // navigate('/products');
        }
        else{
          navigate('/login');
        }
      })
      .catch(err=>console.log(err));
  });
  var txt;
    const opIn = (e) =>{
      e.preventDefault();
      txt = e.target.value;
      console.log(txt);
    }
  // console.log(id);
  React.useEffect(()=>{
    axios.get('http://localhost:3305/orders')
    .then(res=>setOrders(res.data))
    .catch(err=>console.log(err))
  },[])
  React.useEffect(()=>{
    axios.get('http://localhost:3305/orders/'+id)
    .then(res=>setUorders(res.data))
    .catch(err=>console.log(err))
  },[])
  console.log(orders);
  return (
    <Fragment>
      <div className='container bodi sec App'>
      {role===0&&<div><h1>{user}'s Orders</h1></div>}
        {role===1&&<div><h1>All Orders</h1></div>}
          <br/><br/><br/>
          {role===0&&<div className='row'>
                  <div className='col'>
                    <h3>OrderID</h3>
                    </div>
                    <div className='col'>
                    <h3>Time of order</h3>
                    </div>
                    <div className='col'>
                    <h3>Details</h3>
                    </div>
                </div>}
                {role===1&&<div className='row'>
                  <div className='col'>
                    <h3>OrderID</h3>
                    </div>
                    <div className='col'>
                    <h3>UserID</h3>
                    </div>
                    <div className='col'>
                    <h3>Time of order</h3>
                    </div>
                    <div className='col'>
                    <h3>Details</h3>
                    </div>
                    <div className='col'>
                    <h3>Status</h3>
                    </div>
                    <div className='col'>
                    <h3>Method</h3>
                    </div>
                </div>}
                <br/><br/><br/>
            {role===1&&<span>{orders.map((order)=>{            
              return(
                <div className='row'>
                  <div className='col'>
                    <h5>{order.oid}</h5>
                  </div>
                  <div className='col'>
                    <h5>{order.uid}</h5>
                  </div>
                  <div className='col'>
                    <h5>{order.time}</h5>
                  </div>
                  <div className='col'>
                    <h5>{order.details}</h5>
                  </div>
                  <div className='col'>
                      <select name="status" id="status" onChange={opIn}>
                        <option value="placed">placed</option>
                        <option value="shipped">shipped</option>
                        <option value="delivered">delivered</option>
                      </select>  
                    {/* <h5>{order.status}</h5> */}
                  </div>
                  <div className='col'>
                    <h5>{order.method}</h5>
                  </div>
                </div>
              )
            })}</span>}
            {role===0&&<span>{uorders.map((order)=>{            
              return(
                <div className='row'>
                  <div className='col'>
                    <h5>{order.oid}</h5>
                  </div>
                  <div className='col'>
                    <h5>{order.time}</h5>
                  </div>
                  <div className='col'>
                    <h5>{order.details}</h5>
                  </div>
                </div>
              )
            })}</span>}
      </div>
    </Fragment>
  )
}