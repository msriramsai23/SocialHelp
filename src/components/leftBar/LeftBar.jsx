import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import AboutUsIcon from "../../assets/about-us.png"
import Donateicon from "../../assets/donate(1).png"
import Calendar from "../../assets/calendar.png"
import joinus from "../../assets/deal.png"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
         
          <div className="item">
                    <Link to="/donationpage">
                        <img src={Donateicon} alt="" />
                    </Link>
                        <span>Fundraiser</span>
                    </div>
                   
                    <div className="item">
                    <Link to="/upcomingevents">
                        <img src={Calendar} alt="" />
                    </Link>
                        <span>Upcoming events</span>
                    </div>
                   
                    <div className="item">
                    <Link to="/joinus">
                        <img src={joinus} alt="" />
                    </Link>
                        <span>Join Us</span>
                    </div>

                    <div className="item">
                    <Link to="/aboutus">
                        <img src={AboutUsIcon} alt="" />
                    </Link>
                        <span>AboutUs</span>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
