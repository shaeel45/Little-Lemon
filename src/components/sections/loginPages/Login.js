import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HeroImage from '../../../assets/food/food4.webp';
import Loginform from './Loginform';
import Signup from './Signup';

export default function Login() {
    return (
        <>
            <header className="reserve-table">
                <img className="header-reserve" src={HeroImage} alt="Little Lemon Ingredients" />
                <div className="reserve-header-text">
                    <h1>Login</h1>
                </div>
            </header>
            <section>
                <div className="App">
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Routes>
                                <Route exact path="/" element={<Signup />} />
                                <Route exact path="/login" element={<Loginform />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
