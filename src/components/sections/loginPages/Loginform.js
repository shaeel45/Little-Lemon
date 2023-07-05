import React from 'react';


const Loginform = () => {
    return (
        <>
            <div className="container">
                <form className='reservation-form'>
                    <h3>Sign In</h3>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn-form">
                            Login
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Forgot <a href="/">password?</a>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Loginform;
