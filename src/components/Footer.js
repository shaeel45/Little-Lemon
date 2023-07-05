import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <li className="img-footer">
                                <img src={require('../assets/footer-logo.png')} alt="Little Lemon logo"></img>
                            </li>
                        </div>
                        <div className="col-md-3">
                            <li className="contact">
                                <h1 className="footer-header">Navigation</h1>
                                <ul className="footer-links">
                                    <Link to="/home">Home</Link>
                                    <Link to="/about">About</Link>
                                    <a href={require('../assets/menu.webp')} target="_blank" rel="noreferrer">Menu</a>
                                    <Link to="/reservations">Reservations</Link>
                                    <Link to="/order">Order</Link>
                                    <Link to="/login">Login</Link>
                                </ul>
                            </li>
                        </div>
                    
                   
                        <div className="col-md-3">
                            <li>
                                <h1 className="footer-header">Contact</h1>
                                <ul className="footer-links">
                                    <li>2395 Maldove Way,</li>
                                    <li>Chicago Illinois</li>
                                    <br></br>
                                    <li>(629)-243-6827</li>
                                    <br></br>
                                    <a href="mailto: info@littlelemon.com" target="_blank" rel="noreferrer">info@littlelemon.com</a>
                                </ul>
                            </li>
                            </div>
                            <div className="col-md-3">

                            <li>
                                <h1 className="footer-header">Connect</h1>
                                <ul className="footer-links">
                                    <a href="https://www.facebook.com/thelittlelemonshop/" target="_blank" rel="noreferrer">  <i class="bi bi-facebook pe-2"></i>Facebook</a>
                                    <a href="https://www.instagram.com/littlelemonmoon/" target="_blank" rel="noreferrer"><i class="bi bi-instagram pe-2"></i>Instagram</a>
                                    <a href="https://www.youtube.com/watch?v=3Li-FfypZYE" target="_blank" rel="noreferrer">Join us!</a>
                                </ul>
                            </li>
                            </div>
                        </div>
                    </div>
                
            </footer>
        </>
    );
}
