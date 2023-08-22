import React from 'react';
import {useNavigate} from 'react-router-dom';
import Size from './Size';
import axios from 'axios';

const AddProducts = () => {

//   const [value,setValue] = React.useState({
//     name: '',
//     email: '',
//     contact: '',
//     password: ''
// });
// const navigate = useNavigate();
// const handleInput = (e) =>{
//     setValue(prev=>({
//         ...prev,
//         [e.target.name]:[e.target.value]
//     }));
// }
// const handleSubmit = (e) =>{
//     e.preventDefault();
//     setValue(value);
//     if(value.name&&value.email&&value.password&&value.contact){
//         axios.post('http://localhost:3305/signup',value)
//             .then(res=>{
//                 navigate('/login');
//             })
//             .catch(err=>console.log(err));
//     }
// }


  return (
    <div className='sec d-flex justify-content-center align-items-center bg-secondary'>
            <div className='bg-white p-5 rounded-4 w-50'>
            <h3 className='text-center fw-bolder'>Add a Product</h3>
                <form action='' 
                // onSubmit={handleSubmit}
                >
                    <div>
                        <label className='m-2 d-block fw-bolder' htmlFor='name'>Product Name</label>
                        <input 
                               className='m-2 d-block form-control rounded-4 border-3' 
                               name='name' 
                               type='name' 
                              //  onChange={handleInput}
                               required
                        />
                    </div>
                    <div>
                        <label className='m-2 d-block fw-bolder' htmlFor='description'>Add Description</label>
                        <input 
                               className='m-2 d-block form-control rounded-4 border-3' 
                               name='description' 
                               type='text' 
                              //  onChange={handleInput}
                               required
                        />
                    </div>
                    <div>
                        <label className='m-2 d-block fw-bolder' htmlFor='image'>Image Link</label>
                        <input 
                               className='m-2 d-block form-control rounded-4 border-3' 
                               name='image' 
                               type='link'
                              //  onChange={handleInput}
                               required
                        />
                    </div>
                    <div className='mb-3'>
                      <label className='m-2 d-block fw-bolder' htmlFor='variant'>Variant</label><span className='text-light'>1234</span>
                      <input 
                        type='checkbox'
                        value='thai'
                        name='thai'
                        className='m-2 p-2'
                        // onChange={handleInput}
                        required
                      /><span > Thai Premium </span><br/><span className='text-light'>12345678</span>
                      
                      <span className='mb-3'>
                        <label className='m-2 fw-bolder' htmlFor='price'>Price</label>
                        <input 
                          className='m-2 d-inline rounded-3 border-2' 
                          name='price' 
                          type='number'
                        //  onChange={handleInput}
                          required
                      />
                      </span><br/><span className='text-light'>12345678</span>
                      <Size/><br/><span className='text-light'>1234</span>
                      {/* <br/><span className='text-light'>1234</span> */}
                      
                      <input 
                        type='checkbox'
                        value='Player'
                        name='Player'
                        className='m-2 p-2'
                        // onChange={handleInput}
                        required
                      /><span> Player Edition </span><br/><span className='text-light'>12345678</span>

                        <span className='mb-3'>
                          <label className='m-2 fw-bolder' htmlFor='price'>Price</label>
                          <input 
                            className='m-2 d-inline rounded-3 border-2' 
                            name='price' 
                            type='number'
                          //  onChange={handleInput}
                            required
                          />
                        </span><br/><span className='text-light'>12345678</span>

                      <Size/>
                    </div>
                    
                    <button type='submit' className='m-2 d-block fw-bolder form-control btn btn-secondary colorOne rounded-4 border-0'>Add Product</button>  
                </form>
            </div>
        </div>
  )
}

export default AddProducts