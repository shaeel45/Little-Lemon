import React, { useState } from 'react';
import Loginform from './Loginform';

const Signup = () => {
    const [change, setChange] = useState(false);

    const handleClick = (event) => {
        event.preventDefault(); 
        setChange(true);
    };

    if (change) {
        return <Loginform />;
    }

    return (
        <form className="reservation-form">
            <h3>Sign Up</h3>

            <div className="mb-3">
                <label>First name</label>
                <input type="text" placeholder="First name" />
            </div>

            <div className="mb-3">
                <label>Last name</label>
                <input type="text" placeholder="Last name" />
            </div>

            <div className="mb-3">
                <label>Email address</label>
                <input type="email" placeholder="Enter email" />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn-form">
                    Sign Up
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered{' '}
                <a href="./" onClick={handleClick}>
                    sign in?
                </a>
            </p>
        </form>
    );
};

export default Signup;
