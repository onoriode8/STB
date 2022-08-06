import React from 'react';
import customerService from '../../../assests/customerService.jpg';
import classes from './customerService.module.css';
import { AiOutlineMail } from 'react-icons/ai';


const CustomerCare = () => {

    return <React.Fragment>
        <p style={{marginTop: "5em"}}>CUSTOMER SERVICE</p>
        <div className={classes.container}>
            <div>
            <p style={{color: "blue"}}>Customer Service</p>
            <h1 style={{color: "blue"}}>Reach out to our Customer Service concerning Supreme Trust Bank for more informations</h1>
                <div>
                    <img className={classes.customerServiceImage} src={customerService} alt='' />
                </div>
            </div>
            <div className={classes.contain}>
                <div className={classes.bord}>
                    <div style={{fontSize: "1.5em"}}>Customer Service</div>
                    <div style={{fontSize: "1em"}}>Email us @ <AiOutlineMail style={{color: "blue"}} /> supremetrustbank@gmail.com</div>
                </div>
            </div>
        </div>
    </React.Fragment>
};

export default CustomerCare;