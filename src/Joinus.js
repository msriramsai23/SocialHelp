import React from "react";
import './joinus.scss';
import Header from "./Header";
import Footer from "./Footer";

const Joinus = () =>{
    return (
        <div>
        <Header/>
        <div className="hero-img">
          <h1 className="intro-txt"><strong>Let's Spread Happiness</strong><br/></h1>
          <p className="intro-p"><br/><strong>We Deliver your Donations to the Right Place</strong><br/></p>
        </div>
    <section className="our-services">
    <div className="container">
      <div>
        <h1 className="section-headings"><strong>OUR SERVICES</strong><br/></h1>
      </div>
      <div className="icons-logo">
        <div className="col-sm-6 col-md-3 col-lg-4">
        <div>
        <img src="https://imgs.search.brave.com/A1pteFDwm0LgUhjrQDE2fuHYk5JwW6cl6UP5PAND1FI/rs:fit:800:640:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jb25j/ZWl0by1kZS1uZ28t/Y29udHJpYnV0aW9u/LWNvcnBvcmF0ZS1m/b3VuZGF0aW9uLW5v/bnByb2ZpdC03ODU0/ODE4MC5qcGc"/>
        <h1><strong>Choose a Foundation</strong><br/></h1>
        <p>Discover the NGOs tied up with us that are looking for a contribution, and make a contribution via online transaction. *convenience fee applicable</p>
      
      </div>
      </div>
      <p>            </p>
      <div className="col-sm-6 col-md-3 col-lg-4">
        <div>
        <img src="https://indiaeducationdiary.in/wp-content/uploads/2017/11/Akansha-and-Teach-for-India-NGO-kids-at-Krazy-Kids-Karnival.jpg"/>
        <h1><strong>Discover upcoming events</strong><br/></h1>
        <p>Learn about the upcoming events near you to volunteer or visit.</p>
      </div>
      </div>
      <div className="col-sm-6 col-md-3 col-lg-4">
        <div>
        <img src="https://5.imimg.com/data5/SELLER/Default/2022/6/ET/PS/ON/147827526/ngo-promotional-round-neck-cotton-t-shirts-500x500.jpg"/>
        <h1><strong>Buy Merchandise</strong><br/></h1>
        <p>Our NGO partners provide our donors various products the proceeds of which are used to raise funds.</p>
      </div>
      </div>
    </div>
    </div>
  </section>
  <Footer/> 
  </div>
    )
}

export default Joinus;