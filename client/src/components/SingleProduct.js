import React from 'react'
import axios from 'axios'
import { useNavigate, useParams,Link } from 'react-router-dom'

const SingleProduct = () => {
    const {id }= useParams();
    const [role,setRole]=React.useState('');
    const[products,setProducts] =  React.useState({})
    const navigate = useNavigate();
    React.useEffect(()=>{
      axios.get('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          console.log('singleproduct');
          setRole(res.data.role);
          return;
          // navigate('/products');
        }
        else{
          navigate('/login');
        }
      })
      .catch(err=>console.log(err));
    });
    React.useEffect(()=>{
        axios.get('http://localhost:3305/ppp/products/'+id)
        .then(res=>{
          // console.log(res.data[0]);
          setProducts(res.data[0])
        })
        .catch(err=>console.log(err))
      },[id])
  return (
    <div className='App'>
        <div className='sec container'>
          <div className='App'>
            <h3>{products.pname}</h3>
          </div>
          <img className='rounded mx-auto p-2 w-50 d-block img-fluid' src={products.image}></img>
          <div className='App'>
            <h5>{products.description}</h5>
          </div>
          <div className='App row'>
            <div className='col'></div>
            {role===0&&<div className='col'><Link to='' className='colorOne fw-bold btn btn-success'>Add to Cart</Link></div>}
            <div className='col'><Link to='/products' className='colorTwo fw-bold btn btn-primary'>See other products</Link></div>
            <div className='col'></div>
          </div>
        </div>
    </div>
  )
}

export default SingleProduct;