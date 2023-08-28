import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useCart } from '../context/cart_context';
import axios from 'axios'

const CheckOut = () => {
  // const {id} = useParams();
  const navigate = useNavigate();
  const {cart,setCart} = useCart();
  var arr = [];
  // const [user,setUser] = React.useState([]);
  const [id,setId] = React.useState([]);
  const clearCartItem = () =>{
    try{
      let myCart = [...cart];
      myCart = [];
      setCart(myCart);
      localStorage.setItem('cart',JSON.stringify(myCart));
    }
    catch(err){
      console.log(err);
    }
  }
  // const [role,setRole] = React.useState('');
  // const [name,setName] = React.useState('');
  axios.defaults.withCredentials = true;
  React.useEffect(()=>{
    axios.get('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          // setName(res.data.user);

          setId(res.data.id);
          // console.log(res.data.user);
          // console.log('Checkout');
          // console.log(name);
          // arr = name;
          console.log(id);
          return;
          // navigate('/products');
        }
        else{
          navigate('/login');
        }
      })
      .catch(err=>console.log(err));
  });
  // React.useEffect(()=>{
  //   axios.post('http://localhost:3305/profile')
  //   .then(res=>{
  //     setUser(res.data[0]);
  //   })
  //   .catch(err=>console.log(err))
  // },[])
  
  // console.log(user.uid);
  // const sx = dat.uid;
    // console.log(sx);
    // console.log(arr);// console.log(arr.uid);
    function getFullDateAndTimeUTC() {
            const currentDate = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };
            const fullDateAndTimeUTC = currentDate.toLocaleDateString(undefined, options);
            return fullDateAndTimeUTC;
          }
          
          const fullDateAndTimeUTC = getFullDateAndTimeUTC();
          const oid = Date.now();
    
    const [value,setValue] = React.useState({
      oid: oid,
      city: '',
      address: '',
      amount: 0
    });
    const value2 = {
      oid: value.oid,
      uid :id,
      time: fullDateAndTimeUTC,
      details: 'bulk',
      status:'placed',
      method: 'Cash on Delivery'
    };
    var txt,val,x;
    const opIn = (e) =>{
      e.preventDefault();
      x = document.getElementById('method');
      val = x.value;
      txt = x.options[x.selectedIndex].text;
      value2.method = txt;
      console.log(value2.method);
    }
    console.log(val,txt);
    axios.defaults.withCredentials = true;
    const handleInput = (e) =>{
      setValue(prev=>({
        ...prev,
        [e.target.name]:[e.target.value]
      }))
      // setValue2(prev=>({
      //   ...prev,
      //   [e.target.name]:[e.target.value]
      // })),
    }
    const handleSubmit = (e) =>{
    e.preventDefault();
    setValue(value);
    // setValue2(value);
    if(value.city&&value.address){
      axios.post('http://localhost:3305/shipping',value)
      .then(res=>{
        // navigate('/orders');
      })
      .catch(err=>console.log(err));
    }
    if(value2.oid&&value2.uid&&value2.time){
      txt =  value2.method;
      var url;
      if(txt==='Cash on Delivery'){
        url='/log';
      } 
      else{
        url = '/payment';
      }
      {
        axios.post('http://localhost:3305/order',value2)
        .then(res=>{
          navigate(url);
        })
        .catch(err=>console.log(err));
      }
    }
      clearCartItem();
    console.log(value);
    console.log(value2);
  }
    
      // const checkOut = (e)=>{
      //   e.preventDefault();
      //   const value = {
      //     oid: oid,
      //     uid :uid,
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
    <React.Fragment>
                    {/* {id} */}
                    <div className='sec d-flex justify-content-center align-items-center bg-secondary'>
            <div className='bg-white p-5 rounded-4 w-50'>
            <h3 className='text-center fw-bolder'>Checkout</h3>
                <form action='' 
                onSubmit={handleSubmit}
                >
                    <div>
                        <label className='m-2 d-block fw-bolder' htmlFor='city'>City</label>
                        <input 
                          className='m-2 d-block form-control rounded-4 border-3' 
                          name='city' 
                          type='text' 
                          onChange={handleInput}
                          required
                        />
                    </div>
                    <div>
                        <label className='m-2 d-block fw-bolder' htmlFor='address'>Address</label>
                        <input 
                          className='m-2 d-block form-control rounded-4 border-3' 
                          name='address' 
                          type='text' 
                          onChange={handleInput}
                          required
                        />
                    </div>
                    <div >
                    <p className='m-2'>

                    We provide cash on delivery free of charge .<br/>
                        You can also pay in advance.
                    </p>
                    </div>
                    <div>
                      <label className='m-2 fw-bolder' htmlFor='method'>Choose your payment method</label>
                      <select name="method" id="method" onChange={opIn}>
                        <option value="cod">Cash on Delivery</option>
                        <option value="adv">Online payment</option>
                      </select>  
                    </div>
                    <div>
                      <label className='m-2 fw-bolder' htmlFor='amount'>Amount</label>
                      <input 
                        className='m-2 d-inline rounded-3 border-2' 
                        name='amount' 
                        type='number'
                        min={100}
                        onChange={handleInput}
                        // required
                        /> 
                    </div>
                    <div className='mb-3'>
                    </div>
                    
                    <button type='submit' className='m-2 d-block fw-bolder form-control btn btn-secondary colorOne rounded-4 border-0'>Complete Order</button>  
                </form>
            </div>
        </div>
    </React.Fragment>
  )
}

export default CheckOut;