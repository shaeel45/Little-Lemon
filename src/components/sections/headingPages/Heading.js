import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
           

            <article className="call-to-action">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>
                        </div>
                <div className="col-md-6">

                <section className="hero-image">
                                <img src={require('../../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine" className='tilt-in-fwd-tr'></img>
                </section>
                </div>

                    </div>
            </div>

            </article>
      </header>
    );
}