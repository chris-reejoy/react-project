import React from 'react';
import '../scss/counter.scss';
import img from '../images/imagefirstsec.png'
function Section2(props) {
    return (
        <div className="bgimg2">
            <div className="row">
                <div className="col-lg-6 py-5">
                   <div className="col-lg-6">
                   <img src={img} alt="" width="70%" height="80%" />
                </div>
                </div>
                <div className="col-lg-6 py-5">
                    <h2>Our Mission</h2>
                    <h3>Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.

ads via CarbonShutterstock </h3>
                <p>Dear Customer,
As per RBI directives on Positive Payment System (PPS), it is required to pre-register in PPS all cheques for Rs.5 lacs and above, prior to issuing the cheque to the beneficiary. Effective 1 Jul 2021, all cheques valued Rs 1 crore and above that are not pre-registered in PPS will be returned unpaid. Contact branch / use net banking / mobile banking for registering the details.

With regards,
Karur Vysya Bank</p>


                </div>
            </div>
            
</div>
        
    );
}

export default Section2;