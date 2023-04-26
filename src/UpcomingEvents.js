import React from 'react';
import './UpcomingEvents.scss';
import Footer from './Footer'
import Header from './Header';

class UpcomingEvents extends React.Component{
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
          <Header/>
        <section className="section-fundraisers">
        <div className="container">
          <div>
            <h1 className="section-headings"><strong>Find a Fundraiser near you</strong><br /></h1><h1>
            </h1></div>
          <div className="funraiser-events">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div>
                <img src="https://afamilyforeveryorphan.org/wp-content/uploads/2018/12/How-Does-AFFEO-help-Orphans-in-India-Photo-e1544559532305.jpg" />
                <h3>Help the orphans</h3>
                <p>4th March<br />5pm<br />Estella (Juhu)</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div>
                <img src="https://b.zmtcdn.com/feeding-india/176f09742b82b6258cc4a8b5763de2311585292482.png" />
                <h3>Feed India</h3>
                <p>10th March<br />6pm<br />Time and Again (Lokhandwala)</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div>
                <img src="https://photos5.appleinsider.com/gallery/27307-40457-27262-40301-kerala-flooding-l-l.jpg" />
                <h3>Flood Relief</h3>
                <p>3th March <br />6pm<br />Little Door(Bandra)</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div>
                <img src="https://feministsforlife.org/wp-content/uploads/2013/08/BWStopRape-Matthew-Evans-300x200.jpg" />
                <h3>Support Rape Victims</h3>
                <p>19th March <br /> 1pm <br /> Juhu Gymkhana Club</p>
              </div>
            </div>
          </div>
        </div> 
      </section>
      <Footer/>
      </div>
      )
    }
  }
  
  export default UpcomingEvents;