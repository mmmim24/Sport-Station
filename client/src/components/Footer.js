import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      
        
    {/* <div className="colorTwo"> */}
      <div className="footer-bottom--section container">
        <div className="row">
          <div className="col">
            <div>
              <h2>Ready to get started?Talk to us today</h2>
            </div>
            <div>
              <Button className="btn colorThree">
                <NavLink to="/contacts" className='lnk'> <h5>Get Started</h5> </NavLink>
              </Button>
            </div>
          </div>
          <div className="col">
            <h2>Sport Station</h2>
            <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h5>
          </div>
          <div className="col">
            <h2>Call Us</h2>
            <h5>+8801755945867</h5>
          </div>
        </div>
      </div>
    {/* </div> */}
    {/* <div className="colorThree"> */}

      <footer className="container">
          {/* <div className=" footer-bottom--section"> */}
            <hr />
            <div className="row">
              <p className="col"> {new Date().getFullYear()}@SportStation.</p>
              <p className="col"> &copy;All Rights Reserved</p>
              <p className="col">PRIVACY POLICY</p>
              <p className="col">TERMS & CONDITIONS</p>
            </div>
            {/* </div> */}
        </footer>
      
    {/* </div> */}
    </>
  );
};


export default Footer;