import HeroImage from '../../../assets/food/food4.webp';
import Hotel from '../../../assets/food/hotel.jpg';
export default function Heading() {
    return (
        <>
        <header className="reserve-table">
            <img className="header-reserve"src={HeroImage} alt="Little Lemon Ingredients"></img>
            <div className="reserve-header-text">
                <h1>About us</h1>
               
            </div>

            
        </header>
        <article>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                            <main className='info-about'>
                                <h4>Welcome to Little Lemon Restaurant!</h4>
                            <p > 

                                At Little Lemon, we believe that dining is not just about satisfying your hunger; it's an experience that should delight all your senses. Nestled in the heart of the city, our restaurant offers a unique blend of delectable cuisine, warm ambiance, and impeccable service, ensuring that every visit is a memorable one.
<br /><br />
                                Our culinary team, led by renowned Chef Sarah Johnson, brings together a passion for food and a commitment to excellence. With a focus on locally sourced ingredients and seasonal produce, we create dishes that are both flavorful and nourishing. From tantalizing appetizers to mouthwatering main courses and decadent desserts, our menu is carefully crafted to cater to diverse palates and dietary preferences.
<br /><br />
                                Step into our dining room, where you'll find a harmonious blend of modern elegance and rustic charm. The soft lighting, comfortable seating, and tasteful decor create an inviting atmosphere that is perfect for intimate dinners, family gatherings, or celebrations with friends. Our attentive staff is dedicated to providing exceptional service, ensuring that your dining experience is seamless and enjoyable from start to finish.
<br /><br />
                                At Little Lemon, we also take pride in our thoughtfully curated beverage selection. From handcrafted cocktails and premium wines to artisanal beers and specialty non-alcoholic beverages, our bar offers the perfect complement to your meal. Let our knowledgeable bartenders guide you through our extensive collection, and discover a new favorite drink to elevate your dining experience.
<br /><br />
                                We believe that hospitality extends beyond our restaurant doors, which is why we are committed to sustainability and community involvement. We strive to minimize our environmental footprint through responsible sourcing, waste reduction, and energy conservation practices. Additionally, we actively support local farmers, artisans, and charitable organizations, contributing to the growth and well-being of our community.
<br /><br />
                                Whether you're looking for a romantic dinner for two, a business lunch, or a place to celebrate a special occasion, Little Lemon Restaurant is the perfect destination. Join us and indulge in a culinary journey that will delight your taste buds, inspire your senses, and leave you with cherished memories.
                                We look forward to serving you soon at Little Lemon Restaurant!</p>
                        </main>

                    </div>
                    <div className="col-md-6">
                            <main className='hotel'>
                                <img src={Hotel} alt="" />
                            </main>
                    </div>
                </div>
            </div>
                
               
        </article>
        </>
    );
}