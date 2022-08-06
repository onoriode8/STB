import React from 'react';
import AccountDetails from './AccountDetails/AccountDetails';
import { RiBankFill } from 'react-icons/ri';
import UserProfile from './UserProfile';

const users = [
    {
        userName: "Rhonda Denise Stewart",
        userId: "m1",
        name: "Rhonda Stewart",
        phone: "61 0437602874",
        Address: "No 11 Lowthers St Yarrabilba Brisbane Qld 4207"
    }
];


const Users = props => {
    return <React.Fragment>
        <div style={{ 
            display: "flex",
            justifyContent: "space-around",
            cursor: "pointer",
            marginTop: "5em"
        }}>
            <p style={{color: "blue", fontSize: "1.3em"}}>
                <RiBankFill style={{fontSize: "1.5em", color: "rgba(248, 223, 0, 0.986)"}} />Supreme Trust Bank, WashingTon DC</p>
                {users.map(user => <UserProfile 
                key={user.userId} userName={user.userName}
                phone={user.phone} address={user.Address}
                />)}
        </div>
        <div>
            <AccountDetails />
        </div>
    </React.Fragment>
};


export default Users;