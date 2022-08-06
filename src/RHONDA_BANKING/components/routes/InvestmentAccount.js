
const investment = props => {
    return (
        <header style={{margin:"100px 0px"}}>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent:"space-evenly"}}>
            <div>
                <div>INVESTMENT ACCOUNT</div>
                <h1 style={{color:"blue"}}>Investment money for something great.</h1>
            </div>
            <div>
                <img style={{width:"400px", height:"300px"}} 
                src="https://www.usbank.com/dam/images/elite-money-market-savings-acct/photo-smartphone-coffee-04-854x480.jpg
                " alt="" />
            </div>
            <div>
            <h4 style={{color: "blue"}}>The right investment account can help put your goals within reach.</h4>
            <h2 style={{color:"blue"}}>Investment Option</h2>
            <div style={{color:"gray", fontFamily:"Roman"}}><strong>A home investment loan can help you pay for repairs,
                 renovations and additions to your home.</strong></div>
            </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly",flexWrap:"wrap", margin:"10px 0px"}}>
            <div style={{border: "1px solid #1134",padding: "20px 20px", marginLeft: "10%", marginRight: "10%"}}>
                <h3>Standard Investment Account</h3>
                <p>Basic investment ideal for low balances and first-time savers.</p>
                <p>MONTHLY MAINTENANCE FEE</p>
                <p style={{fontSize:"2em"}}>$4</p>
                    <button style={{padding:"10px 10px",background:"blue", color:"#fff"}}>Start Investment</button>
            </div>
            <div style={{border: "1px solid #1134",padding: "20px 20px", marginLeft: "10%", marginRight: "10%"}}>
                <h3>Platinum Select Money Market Investment</h3>
                <p>Exclusive investment account for our Platinum Checking Package customers.</p>
                <p>MONTHLY MAINTENANCE FEE</p>
                <p style={{fontSize:"2em"}}>$25</p>
                    <button style={{padding:"10px 10px", background:"blue",color:"#fff"}}>Start Investment</button>
            </div>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",padding: "20px 20px", marginLeft: "10%", marginRight: "10%"}}>
            <div style={{textAlign:"center"}}>
                <div style={{fontSize:"2em"}}>Package Money Market Investment.</div>
                <p>Competitive Investment account rates only for Gold Checking Package customers</p>
                <p>MONTHLY MAINTENANCE FEE</p>
                <p style={{fontSize:"2em"}}>$30</p>
                    <button style={{padding:"10px 10px",border: "1px solid #1134", background:"blue",color:"#fff"}}>Start Investment</button>
            </div>
            
        </div>
    </header>
    );
};

export default investment;
