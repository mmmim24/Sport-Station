// import React from 'react'

const Validation = (value) => {
    let err = {};
    const ep = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(value.email===""){
        err.email = "Email should not be empty"
    }
    else if(!ep.test(value.email)){
        err.email = "Invalid Email";
    }
    else{
        err.email = "";
    }

    if(value.password===""){
        err.password = "Password should not be empty"
    }
    else if(!pp.test(value.password)){
        err.password = "Password should be alphaneumeric(8 characters)";
    }
    else{
        err.password = "";
    }

    return err;
}

export default Validation;