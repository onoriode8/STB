import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../AxiosInstance/axios';
import classes from './UserAccount.module.css';

const UserAccount = props => {
    // store the account number on a database and the user name 
    //  and account status as well
    // and fetch the account number and account status and user name as well to this component
    const [accountNumber, setAccountNumber] = useState(null);
    const [accountName, setAccountName] = useState(null);
    const [accountBalance, setAccountBalance] = useState(null);

    useEffect(() => {
        // fetch the user name and account number here and update it where needs to be updated
        //  and account status as well
        axiosInstance.get('/userBalance.json')
         .then(response => {     
            setAccountName(response.data.userName);
            setAccountNumber(response.data.accountNumber);
            setAccountBalance(response.data.balance)
         }).catch(() => {});
    }, []);

    return <React.Fragment>
        <header className={classes.userAccount}>
                <div className={classes.userContainer}>
                    <div>
                        <div>Status: Savings</div>
                    </div>
                    <div>
                        <div><strong>{accountNumber}</strong></div>
                        <div style={{fontSize: "1.3em"}}><strong>${accountBalance} USD</strong></div>
                    </div>
                    <div>
                        {accountName !== null &&
                        <div>
                            <strong>{accountName.toUpperCase()}</strong>
                        </div> }
                    </div>
              </div>
        </header>
    </React.Fragment>
};


export default UserAccount;