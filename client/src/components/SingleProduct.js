import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SingleProduct = () => {
    const [products,setProducts] = React.useState('');
    const navigate = useNavigate();
    React.useEffect(()=>{
        axios.get('http://localhost:3305/ppp/products/:id')
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
      },[])
    React.useEffect(()=>{
        axios.get('http://localhost:3305')
          .then(res=>{
            if(res.data.valid){
              console.log(res.data.valid);
              return;
              // navigate('/products');
            }
            else{
              navigate('/login');
            }
          })
          .catch(err=>console.log(err));
    });
    console.log(products);
  return (
    <div className='App container'>SingleProduct
        {products.pname}
    </div>
  )
}

export default SingleProduct;