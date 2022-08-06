import React from 'react';
import Image from '../../assests/rhonda.jpg';

const userProfile = props => {
    return (
        <React.Fragment>
            <div style={{fontFamily: "Roman"}}>
                <div>
                    <img style={{width: "150px"}} src={Image} alt="" />
                    {/* <p>Profile</p> */}
                    <p><strong>{props.userName}</strong></p>
                    <hr />
                </div>
                <div>
                    <p><strong>Address: {props.address}</strong></p>
                    <p></p>
                    <p><strong>Phone: +{props.phone}</strong></p>
                </div>
                </div>
        </React.Fragment>
    );
};

export default userProfile;