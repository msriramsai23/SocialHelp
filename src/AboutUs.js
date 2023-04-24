import React from 'react';
import './AboutUs.scss';
import Header from './Header';
import Footer from './Footer';

class AboutUs extends React.Component{
    constructor () {
      super()
      this.state = {
        name: 'Sara'
      }
    }
  
    clickedBtn = () => {
      console.log('swag')
    }
  
    render () {
      return (
        <div>
        
            <div className="our-story container-fluid">
        <div>
          <h1 className="section-headings"><strong>Our Story</strong><br /></h1><h1>
          </h1></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p style={{fontSize: '17px'}}><br />Our story began with a desire to make a difference in the lives of people who are struggling to meet their basic needs. We recognized that there are millions of people around the world who do not have access to basic necessities such as food, water, and shelter. We knew we had to do something to help.

That's when we decided to create an NGO website that would allow people to donate to those in need. Our website was designed to be easy to use, and anyone can make a donation using our fundraiser feature. We are proud to say that our website has helped to raise thousands of dollars for people in need, and we have been able to make a real difference in people's lives.

One of the most rewarding parts of our journey has been the stories of the people we have been able to help. We have heard from people who were struggling to put food on the table for their families, and who were able to receive assistance from our website. We have also heard from people who were homeless, and who were able to find shelter thanks to the generosity of our donors.

We have also been fortunate to work with a number of dedicated volunteers who have helped us to spread the word about our website and to raise funds for people in need. These volunteers have been an essential part of our success, and we are grateful for their support.

Of course, our journey has not been without its challenges. We have faced a number of obstacles along the way, including technical difficulties with our website and difficulties in finding people who are in need. However, we have always been committed to our mission, and we have worked hard to overcome these challenges.

Looking back on our journey, we are incredibly proud of what we have accomplished. We have been able to make a real difference in the lives of people who are struggling, and we have seen firsthand the power of people coming together to help those in need. We believe that our story is a testament to what can be accomplished when people work together to make the world a better place. We hope that our website will continue to be a source of hope and support for people in need for many years to come. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br />As a group of students at IIIT Dharwad in Hubli, Karnataka, we recognized that there were many people in the surrounding area who were struggling to meet their basic needs. We knew that we had to do something to help. That's when we decided to launch a project to help those in need.

Our first step was to identify the people in the surrounding area who were in the greatest need. We partnered with local NGOs and community organizations to get a better understanding of the challenges facing people in the area. We discovered that many people were struggling to afford basic necessities like food, clothing, and shelter.

With this knowledge in hand, we got to work. We organized a food and clothing drive to collect donations from students and staff at our college. We were overwhelmed by the generosity of our community. People donated everything from canned goods to winter coats to baby formula.

Once we had collected the donations, we worked with our partners to distribute them to people in need. We focused our efforts on families with children, seniors, and people with disabilities. We wanted to ensure that the most vulnerable people in our community were getting the help they needed.

The response from the people we helped was overwhelming. We heard stories of families who were able to put a meal on the table for the first time in weeks, and seniors who were able to stay warm during the cold winter months. We also heard from people who were touched by our efforts and grateful for the support.

Our project was not without its challenges. We faced logistical challenges in organizing the donations and finding the people who needed them most. However, we persevered, and we were able to make a real difference in the lives of people in our community.

Looking back on our project, we are incredibly proud of what we accomplished. We were able to help people who were struggling to meet their basic needs, and we were able to bring our community together to make a difference. We believe that our efforts are a testament to the power of people coming together to create positive change in the world.<br />
              </p>
              
            </div>
          </div>
        </div>
        <div id="content-area" style={{boxSizing: 'border-box', maxWidth: '90%', margin: '0 auto'}}>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div style={{background: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80) no-repeat top center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', height: '200px', width: '100%', margin: '10px'}}>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div style={{background: 'url(https://images.unsplash.com/photo-1521369483739-e33ef611d7e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80) no-repeat top center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', height: '200px', width: '100%', margin: '10px'}}>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div style={{background: 'url(https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80) no-repeat top center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', height: '200px', width: '100%', margin: '10px'}}>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div style={{background: 'url(https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80) no-repeat top center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', height: '200px', width: '100%', margin: '10px'}}>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div style={{background: 'url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80) no-repeat top center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', height: '200px', width: '100%', margin: '10px'}}>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div style={{background: 'url(https://images.unsplash.com/photo-1560252811-2ab1e44ce202?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) no-repeat top center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', height: '200px', width: '100%', margin: '10px'}}>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div style={{background: 'url(https://images.unsplash.com/photo-1557660559-42497f78035b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2615&q=80) no-repeat top center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', height: '200px', width: '100%', margin: '10px'}}>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div style={{background: 'url(https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80) no-repeat top center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', height: '200px', width: '100%', margin: '10px'}}>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div style={{background: 'url(https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80) no-repeat top center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', height: '200px', width: '100%', margin: '10px'}}>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div style={{background: 'url(https://images.unsplash.com/photo-1490187763999-9f273a5b7516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80) no-repeat top center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', height: '200px', width: '100%', margin: '10px'}}>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div style={{background: 'url(https://images.unsplash.com/photo-1558261827-d0de98a628e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80) no-repeat top center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', height: '200px', width: '100%', margin: '10px'}}>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div style={{background: 'url(https://images.unsplash.com/photo-1566937863719-c6c62f9ee69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80) no-repeat top center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', height: '200px', width: '100%', margin: '10px'}}>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
      )
    }
  }
  
  export default AboutUs;