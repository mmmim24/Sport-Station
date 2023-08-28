import React from 'react'
import axios from 'axios'
import {  useParams,Link } from 'react-router-dom'
import { Checkbox } from '@mui/material'
import { useCart } from '../context/cart_context';
import toast  from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SingleProduct = () => {
    const {id }= useParams();
    const {cart,setCart} = useCart();
    const [user,setUser] = React.useState('');
    const [role,setRole]=React.useState('');
    const[product,setProduct] =  React.useState({})
    // const navigate = useNavigate();
    React.useEffect(()=>{
      axios.post('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          console.log('singleproduct');
          setRole(res.data.role);
          setUser(res.data.user);
          return;
          // navigate('/product');
        }
        else{
          // navigate('/login');
        }
      })
      .catch(err=>console.log(err));
    });
    React.useEffect(()=>{
        axios.get('http://localhost:3305/product/'+id)
        .then(res=>{
          // console.log(res.data[0]);
          setProduct(res.data[0])
        })
        .catch(err=>console.log(err))
      },[id])
    
      // function getFullDateAndTimeUTC() {
      //   const currentDate = new Date();
      //   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };
      //   const fullDateAndTimeUTC = currentDate.toLocaleDateString(undefined, options);
      //   return fullDateAndTimeUTC;
      // }
      
      // const fullDateAndTimeUTC = getFullDateAndTimeUTC();
      // const oid = Date.now();
      // const checkOut = (e)=>{
      //   e.preventDefault();
      //   const value = {
      //     oid: oid,
      //     pid :product.pid,
      //     time: fullDateAndTimeUTC,
      //     details: product.pname+" price "+product.price,
      //     status:'placed'
      //   }
      //     axios.post('http://localhost:3305/order',value)
      //         .then(res=>{
      //             navigate(`/checkout/${oid}`);
      //         })
      //         .catch(err=>console.log(err));
        
      // }
  return (
    <div className='App'>
        <div className='sec container'>
          <div className='App'>
            <h3>{product.pname}</h3>
          </div>
          <img className='rounded mx-auto p-2 w-50 d-block img-fluid' src={product.image} alt={product.pname}></img>
          {product.imageback&&<img className='rounded mx-auto p-2 w-50 d-block img-fluid' src={product.imageback} alt={product.pname}></img>}

          <div className='App'>
            <h5>{product.description}</h5>
          </div>
          <div className='row text-dark fw-bolder'><div className='col'></div><div className='col'>Category: {product.category} </div><div className='col'>{product.price} ৳</div><div className='col'></div></div><br/><br/>
          <div className='row text-dark fw-bolder'><div className='col'>Available Sizes 
              S:<Checkbox {...label}  /> 
              M:<Checkbox {...label} /> 
              L:<Checkbox {...label} /> 
              XL:<Checkbox {...label} /> 
              XXL:<Checkbox {...label} /> 

          </div></div><br/><br/>
          <div className='App row'>
            <div className='col'>

            {(role!==1||user)&&<Link className='btn colorOne btn-danger fw-bold border-0' 
                          onClick={()=>{
                            setCart([...cart,product]);
                            localStorage.setItem('cart',JSON.stringify([...cart,product]));
                            toast.success("Added to cart");
                          }}
                           >Add to cart<Toaster/></Link> }
            
                            </div>
               {role===1&&<div className='col'><Link
              to={`/editproduct/${product.pid}`}
               className='colorOne fw-bold btn btn-warning border-0'>Edit</Link></div>}
            <div className='col'><Link to='/products' className='colorTwo fw-bold btn btn-primary border-0'>See other product</Link></div>
            <div className='col'>{role===1&&<Link className='btn btn-danger' to={`/delete/${product.pid}`}>Remove</Link>}</div>
          </div>
        </div>
    </div>
  )
}

export default SingleProduct;