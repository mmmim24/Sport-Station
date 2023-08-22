import React from 'react'
import Dropdown from './Dropdown';

const Size = () => {
  return (
    <React.Fragment>
        <span className='mb-3'>
                        <label className='d-inline m-2  fw-bolder' htmlFor='size'>Size </label>
                        <span > S </span><Dropdown/>
                        <span > M </span><Dropdown/>
                        <span > L </span><Dropdown/>
                        <span > XL </span><Dropdown/>
                        <span > XXL </span><Dropdown/>
                      </span>
    </React.Fragment>
  )
}

export default Size;