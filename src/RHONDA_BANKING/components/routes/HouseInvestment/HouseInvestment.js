import React from 'react';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { FiShoppingBag } from 'react-icons/fi';
import { BsBag }  from 'react-icons/bs';
import ExtendPay from '../../../assests/ExtendPay.jpg';
import './HouseInvestment.css';

const houseInvestment = props => {
    return (
        <header style={{margin:"100px 0px"}}>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent:"space-evenly"}}>
            <div>
                <div>House Investment</div>
                <h1 style={{color:"blue"}}>Discover financing options to make your dream home a reality.</h1>
            </div>
            <div>
                <img className="image" src={ExtendPay} alt="" />
            </div>
            <div>
            <h4 style={{color: "blue"}}>Find the home improvement loan that’s just right for you.</h4>
            <h3>Estimate how much your home improvement project will cost.</h3>
            <h2 style={{color:"blue"}}>Loan Option</h2>
            <div style={{color:"gray", fontFamily:"Roman"}}><strong>A home improvement loan can help you pay for repairs,
                 renovations and additions to your home.</strong></div>
            </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly",flexWrap:"wrap", margin:"10px 0px"}}>
            <div style={{border: "1px solid #1134",padding: "20px 20px", marginLeft: "10%", marginRight: "10%"}}>
                <h3>Less than $15,000</h3>
                <p>You might consider a house investment for this price point. 
                    Another choice that could work well is the Supreme Trust Bank Visa, which offers a low introductory APR.
                  </p>
                    <button style={{padding:"10px 10px",background:"blue", color:"#fff"}}>Apply Now</button>
            </div>
            <div style={{border: "1px solid #1134",padding: "20px 20px", marginLeft: "10%", marginRight: "10%"}}>
                <h3>$35,000 or more</h3>
                <p>Choices for this price point include a cash-out refinance, a  or a home equity line of credit (HELOC).
                     A cash-out refinance gives you access to cash as you refinance. 
                    A home equity loan offers a single lump sum at a fixed rate. And a HELOC provides convenience at a low cost.
                    </p>
                    <button style={{padding:"10px 10px", background:"blue",color:"#fff"}}>Apply Now</button>
            </div>
        </div>
        <div style={{display:"flex",flexWrap:"wrap"}}>
            <div style={{textAlign:"center"}}>
                <div style={{fontSize:"2em"}}>Explore loan features that work best for you.</div>
                <p>Compare the features and benefits of different home improvement loan types.</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
                <div>
                    <FiShoppingBag style={{fontSize:"2em"}}/>
                    <div>Access to your home equity</div>
                    <p>Choose a home equity line of credit for easy access to funds and flexible payment choices. 
                        A home equity loan provides fixed rates and a steady repayment schedule. 
                        Or, a cash-out refinance gives you access to cash as you refinance your home.</p>
                </div>
                <div>
                    <RiShoppingBag3Line style={{fontSize:"2em"}}/>
                    <div style={{fontSize:"2em"}}>New mortgage terms</div>
                    <p>A cash-out refinance is a great way to get new mortgage terms and borrow funds for one-time expenses at the same time.
                         Some benefits may include access to cash at closing,
                         a better rate and the ability to consolidate debt into a single monthly payment.</p>
                </div>
                <div>
                    <BsBag style={{fontSize:"2em"}}/>
                    <div style={{fontSize:"2em"}}>New mortgage terms</div>
                    <p>A home improvement personal loan or home equity loan are good ideas if you’re looking for a lump sum of money 
                        to get your project started. For more flexibility with ongoing access to funds, consider a home improvement personal line of credit,
                         home equity line of credit or the Supreme Trust Bank Visa® Platinum Credit Card.</p>
                </div>
            </div>
        </div>
    </header>
    );
};

export default houseInvestment;