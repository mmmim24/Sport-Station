import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Button,Typography} from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Product  from './Product';
import { useStateValue } from '../context/StateProvider';
import { useCart } from '../context/cart_context';

export const Products = () => {
  // const [dstate,dispatch] = useStateValue();
  // const [cart,setCart] = useCart();
  const navigate = useNavigate();
  const [role,setRole] = React.useState('');
  const[products,setProducts] =  React.useState([])
  React.useEffect(()=>{
    axios.get('http://localhost:3305/products')
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))
  },[])
  React.useEffect(()=>{
    axios.get('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          setRole(res.data.role);
          console.log('Products');
          return;
          // navigate('/products');
        }
        else{
          navigate('/login');
        }
      })
      .catch(err=>console.log(err));
  });
//   const addtoCart = (e) =>{
//     dispatch({
//       type: "ADD_TO_CART",
//       item: {
//         pid: products.pid,
//         pname: products.pname,
//         description: products.description,
//         image: products.image,
//         price: products.price
//       },
//     })
// }
console.log(products);
  return (
    <React.Fragment>
      <div className='bg-secondary sec'>
        <div className='container'>
          <div className='row row-cols-3'>
            {/* {products.map((p)=>{
              return(
                <span>
                  
                <Product
                  pid={p.pid}
                  pname={p.pname}
                  description={p.description}
                  image={p.image}
                  price={p.price}
                  />
                <p>{cart.length}</p>
                  </span>
              )
            })}            */}
            {products.map((p)=>{
            return (
            <div key={p.pid} className='col'>
                      <Card sx={{ width: 345 }}>
                        <CardMedia
                          component="img"
                          alt={p.pname}
                          height="300"
                          image={p.image}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">{p.pname.slice(0,27)}</Typography>
                          <Typography variant="body2" color="text.secondary">{p.description.slice(0,99)}</Typography>
                        </CardContent>
                        <CardActions>
                          {role===0&&<Button size="small" 
                          // onClick={()=>{setCart(...cart,p)}}
                          >
                            Add to cart
                            </Button> }
                          <span className='mx-auto'>{p.price} ৳</span>
                          <Link className='btn colorTwo btn-primary' to={`/product/${p.pid}`}>Learn More</Link>
                        </CardActions>
                      </Card><br/><br/>
                    </div>)
              })}
          </div>
        </div>
      </div>  
    </React.Fragment>
  )
}
