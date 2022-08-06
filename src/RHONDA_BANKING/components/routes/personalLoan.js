import React from 'react';
// import classes from './personalLoan.css';

const personalLoan = props => {
    return (
        <React.Fragment>
            <header style={{margin:"100px 0px"}}>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent:"space-evenly"}}>
                    <div>
                        <div>PERSONAL LOANS</div>
                        <h1 style={{color:"blue"}}>Convenient access to funds when you need them</h1>
                    </div>
                    <div>
                        <img style={{width:"400px", heigth:"300px"}} src="https://www.forbes.com/advisor/wp-content/uploads/2021/08/getty-us-bank-cd-rates.jpeg.jpg" alt="" />
                    </div>
                    <div>
                    <h2 style={{color:"blue"}}>Loan Option</h2>
                    <div style={{color:"gray", fontFamily:"Roman"}}><strong>A personal loan is one way to consolidate debt or to pay for major expenses. 
                        It offers fixed interest rates and fixed monthly payments for the life of the loan. 
                        A personal loan is best for one-time funding, or if you know the entire cost of your project up front.
                         You receive the loan in one lump sum.</strong></div>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-evenly",flexWrap:"wrap", margin:"10px 0px"}}>
                    <div style={{border: "1px solid #1134",padding: "20px 20px", marginLeft: "10%", marginRight: "10%"}}>
                        <h3>Personal Loan</h3>
                        <p>Take control of your finances with a personal loan. 
                            Supreme Trust Bank checking customers with credit approval may be able to borrow up to $50,000.
                            Those without a Supreme Trust Bank account may be able to borrow up to $25,000. Borrow $1,000 up to $50,000.
                          </p>
                            <button style={{padding:"10px 10px",background:"blue",color:"#fff"}}>Apply Now</button>
                    </div>
                    <div style={{border: "1px solid #1134",padding: "20px 20px", marginLeft: "10%", marginRight: "10%"}}>
                        <h3>Home improvement personal loan</h3>
                        <p>Upgrade your home and its value. Supreme Trust Bank checking customers with 
                            credit approval may borrow up to $50,000 with our home improvement personal loan
                            .2 Those without a Supreme Trust Bank account may be able to borrow up to $25,000.
                            Borrow $1,000 up to $50,000
                            </p>
                            <button style={{padding:"10px 10px", background:"blue",color:"#fff"}}>Apply Now</button>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default personalLoan;