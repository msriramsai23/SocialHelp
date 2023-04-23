import React from "react";
import './Header.scss';



const Header = () =>{
    return(
      <div>
        <nav className="navbar">
          <div className="container">
            <p className="logo" >BE THE CHANGE</p>
            <div className="menu">
                <p>Upcoming Campaigns</p>
                <p>DONATE</p>
                <p>MERCH</p>
                <p>ABOUT US</p>
                <p>CONTACT US</p> 
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Header;

