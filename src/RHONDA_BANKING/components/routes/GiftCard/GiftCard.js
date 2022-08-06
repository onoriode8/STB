

const giftCard = props => {
    return <header style={{marginTop:"5em",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
            <div>
                <div>
                    <img src='' alt='' />
                </div>
                <p>Gift Card</p>
                <div>
                    <div><h1>The gift of choice</h1></div>
                    <p>With the Supreme Trust Bank Visa Gift Card, recipients can choose the perfect gift themselves – 
                        from clothes to music, movie tickets to dinner and much more. Plus, it's safer than giving cash.
                    </p>
                    <button style={{padding:"15px 20px",background:"blue",color:"#fff"}}>Purchase at Supreme Trust Bank</button>
                </div>
            </div>
            <p style={{marginLeft:"5em"}}>The Visa Gift Card is issued by Supreme Trust Bank National Association pursuant to a license from Visa U.S.A. Inc.</p>
    </header>
};

export default giftCard;