import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const Services = () => {
  return (
    <React.Fragment>
        <div className="colorTwo">
        <br/><br/><br/>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div>
                        <MdSecurity className="icon" />
                        <h2>Contactless Shipping</h2>
                    </div>
                </div>
                <div class="col-sm">
                    <div>
                        <TbTruckDelivery className="icon" />
                        <h2>Fast and Free Delivery</h2>
                    </div>
                </div>
                <div class="col-sm">
                    <div>
                        <GiReceiveMoney className="icon" />
                        <h2>Cash On Delivery(COD)</h2>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/><br/>
        </div>
    </React.Fragment>
  );
};


export default Services;