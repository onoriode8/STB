

const debitCard = props => {
    return <header style={{marginTop:"5em",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
            <div>
                <div>
                    <img style={{width: "100%"}}
                    src="https://www.usbank.com/dam/images/checking/checking-accounts/checking-customer-resources/workplace-banking/photo-office-meeting-master.jpg" alt="" />
                </div>
            </div>
            <div>
                <div>
                    <h1 style={{color:"blue"}}>What is a debit card?</h1>
                    <p style={{fontSize:"1.1em",fontFamily:"Roman"}}>It's a payment card that’s connected to your checking account. 
                        It gives you easy access to the funds in your account so you can use it for everyday purchases instead of cash or checks. 
                        You can also use it at the ATM and online to make purchases and pay bills.</p>
                </div>
                <div>
                    <div style={{color:"blue"}}><h2>How does a debit card work?</h2></div>
                    <p style={{fontSize:"1.1em",fontFamily:"Roman"}}>Purchases and withdrawals made with your debit card are funded by your checking account. 
                        The debit card does not carry a balance – your checking account does.</p>
                </div>
            </div>
            <div>
                <h2 style={{fontSize:"2em",color:"blue"}}>Get your debit card today.</h2>
                <p>Open a Supreme Trust Bank checking account and request for a credit card.</p>
            </div>
    </header>
};

export default debitCard;