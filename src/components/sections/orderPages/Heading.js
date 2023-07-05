import HeroImage from '../../../assets/food/food4.webp';
import image from '../../../assets/food/food1.png';
import photo from '../../../assets/food/bruschetta.jpeg';
import picture from "../../../assets/food/food4.webp";

import React from 'react';
export default function Heading() {
    return (
        <>
        <header className="reserve-table">
            <img className="header-reserve"src={HeroImage} alt="Little Lemon Ingredients"></img>
            <div className="reserve-header-text">
                <h1>Order Online</h1>
            </div>
        </header>
        <section>
                <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <main className='order-form'>
                                <form className="reservation-form">
                                    <div>
                                        <label htmlFor="">First Name</label> <br></br>
                                        <input type="text" id="fName" placeholder="First Name"
                                            required minLength={2} maxLength={50}
                                           
                                            ></input>
                                    </div>

                                    <div>
                                        <label htmlFor="lName">Last Name</label> <br></br>
                                        <input type="text" id="lName" placeholder="Last Name"
                                            minLength={2} maxLength={50}
                                            ></input>
                                    </div>

                                    <div>
                                        <label htmlFor="email">Email</label> <br></br>
                                        <input type="email" id="email" placeholder="Email"
                                            
                                            ></input>
                                    </div>

                                    <div>
                                        <label htmlFor="phonenum">Phone Number</label> <br></br>
                                        <input type="tel" id="phonenum" placeholder="(xxx)-xxx-xxxx"
                                         
                                            required minLength={10} maxLength={25}
                                          ></input>
                                    </div>

                                    <div>
                                        <label htmlFor="Item">Order</label> <br></br>
                                        <input type="text" id="item" placeholder="Order Item"

                                           
                                        ></input>
                                    </div>

                                    <div>
                                        <label htmlFor="Address">Address</label> <br></br>
                                        <input type="text" id="Address" placeholder="Address"

                                           
                                        ></input>
                                    </div>

                                    <div>
                                        <label htmlFor="">Additional Comments</label> <br></br>
                                        <textarea id="comments" rows={8} cols={50} placeholder="Additional Comments"
                                            >
                                        </textarea>
                                    </div>
                                    <div>
                                        <br></br>
                                        <small><p className='ps-5 pe-5'>Note: You cannot edit your Order after submission. Please double-check your answer
                                            before submitting your Order request.</p></small>
                                        <button className="action-button-2" to="/confirmation">Confirm Order</button>
                                    </div>
                                    </form>
                                </main>
                            </div>
                        <div className="col-md-6">
                            <article className='img-form'>
                                <img src={image} alt="foods" className='scale-up-left' />
                                <img src={photo} alt="food" className='img scale-up-hor-right' />
                                <img src={picture} alt="food" className='img-1 scale-up-top' />
                            </article>
                        </div>
                        </div>
                </div>
        </section>
        </>
    );
}