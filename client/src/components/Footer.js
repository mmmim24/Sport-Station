import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
    
      <div className="colorThree sec">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Ready to get started?</h2>
              <div>
                <Button className="btn colorTwo"><NavLink to="/contacts" className='lnk'> <h5>Get Started</h5> </NavLink></Button>
                <h2>Talk to us today</h2>
              </div>
            </div>
            <div className="col">
              <h2>Sport Station</h2><h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h5>
            </div>
            <div className="col">
              <h2>Call Us</h2>
              <h5>+8801755945867</h5>
            </div>
          </div>
        </div>
      </div>

        
    
    

      <footer className="colorThree">
          <hr/>
        <div className="container">
          <div className="row">
            <p className="col"> {new Date().getFullYear()}@SportStation.</p>
            <p className="col"> &copy;All Rights Reserved</p>
            <p className="col">PRIVACY POLICY</p>
            <p className="col">TERMS & CONDITIONS</p>
          </div>
        </div>
      </footer>

    </React.Fragment>
  );
};


export default Footer;