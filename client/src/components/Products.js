import React from 'react';
import {Card,CardMedia,CardContent,CardActions,Typography,CardActionArea} from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
// import Product  from './Product';
// import { useStateValue } from '../context/StateProvider';
import { useCart } from '../context/cart_context';

export const Products = () => {
  // const [dstate,dispatch] = useStateValue();
  var k=0;
  const {cart,setCart} = useCart();
  // const navigate = useNavigate();
  const [role,setRole] = React.useState('');
  const [user,setUser] = React.useState('');
  const[products,setProducts] =  React.useState([]);
  React.useEffect(()=>{
    axios.get('http://localhost:3305/products')
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))
  },[products])
  React.useEffect(()=>{
    axios.get('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          setRole(res.data.role);
          setUser(res.data.user);
          // console.log('Products');
          return;
          // navigate('/products');
        }
        else{
          // navigate('/login');
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
// console.log(products);

  return (
    <React.Fragment>
      <div className='bodi bg-secondary sec'>
        <div className='container'>
          <div className='row row-cols-3'>
            {products.map((p)=>{
              // k=k+1
              return (
                <div key={k} className='col'>
                  <Card sx={{ width: 345,height: 450 }}>
                    <CardActionArea >
                      <a href={`/product/${p.pid}`}>
                        <CardMedia
                          component="img"
                          alt={p.pname}
                          height="250"
                          image={p.image}
                        />
                      </a>
                      <CardContent
                          sx={{ width: 345,height: 150 }}
                        >
                        <Typography gutterBottom variant="h5" component="div">{p.pname.slice(0,27)}</Typography>
                        <Typography variant="body2" color="text.secondary">{p.description.slice(0,99)}</Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      sx={{ width: 345,height: 50 }}
                      >
                      <Link className='btn colorOne btn-danger fw-bold border-0' 
                        onClick={()=>{
                        setCart([...cart,p]);
                        localStorage.setItem('cart',JSON.stringify([...cart,p]));
                        toast.success("Added to cart");
                       }}
                        >
                        Add to cart<Toaster/></Link> 
                          <div className='mx-auto fw-bolder fs-4'>{p.price} ৳</div>
                          
                          
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
