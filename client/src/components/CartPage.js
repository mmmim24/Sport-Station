import React from 'react'
import { useCart } from '../context/cart_context';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
const CartPage = () => {
  const navigate = useNavigate();
  const{cart,setCart} = useCart();
  const [id,setId] = React.useState('')
  const [user,setUser] = React.useState('');
  React.useEffect(()=>{
    axios.post('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          setUser(res.data.user);
          setId(res.data.id);
          console.log('Cart');
        }
        // else{
          // navigate('/');
        // }
      })
      .catch(err=>console.log(err));
  });
  console.log(id);
  const totalPrice=()=>{
    try{
      let total = 0;
      cart.map(item=>{
        total = total +item.price;
        return total;
      })
      return total.toLocaleString("en-US",{
        style: "currency",
        currency: "BDT"
      });
    }
    catch(err){
      console.log(err);
    }
  }
  const removeCartItem = (id) =>{
    try{
      let myCart = [...cart];
      let index = myCart.findIndex(item=>item.pid===id)
      myCart.splice(index,1);
      setCart(myCart);
      localStorage.setItem('cart',JSON.stringify(myCart));
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <React.Fragment>
      <div className='App bodi sec container'>
        <div className=''>
          <h1 className='text-center bg-white p-2'>Hello {user}</h1><br/>
          <h4 className='text-center bg-light p-2 mb-1'>{cart.length>0?`You have added ${cart.length} items in your cart. ${user?"":"Please login to checkout"}`:"Your cart is empty!"}</h4><br/><br/>
          {!user&&<Link className='mx-auto d-block fw-bolder form-control btn btn-secondary colorOne rounded-4 border-0 w-25' to='/login'>LOGIN</Link>}
        </div>
        <div className='row'>
          <div className='col'>
          <h5>
            Cart Item

          </h5>
          </div>
          <div className='col'>
          <h5>

            Checkout | Payment            
          </h5>
          </div>
        </div>{cart.map(c=>(
          <div key={c.pname} className='row mb-2 p-3 card flex-row'>
            <div className='col'>
              <img
                src={c.image}
                alt ={c.pname}
                className='w-25 card-img-top'
              />
            </div>
            <div className='col'>
              <p>{c.pname}</p>
              <p >price BDT ৳{c.price}</p>
            <button className='btn btn-danger rounded-0' onClick={()=>removeCartItem(c.pid)}>Remove from cart</button>
            </div>
          </div>
        ))}
          <div className='row'>
            <div className='col'>

            </div>
            <div className='col'>
              
          TOTAL = {totalPrice()}
            </div>
          </div>
          <button onClick={()=>{navigate('/checkout');}} className='App btn btn-primary colorTwo'>Place order</button>
      </div>
    </React.Fragment>
  )
}

export default CartPage;