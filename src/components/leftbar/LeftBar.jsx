import "./leftBar.scss"
import Friends from "../../assets/1.png"
import Groups from "../../assets/2.png"
import Market from "../../assets/3.png"
import Watch from "../../assets/4.png"
import Memories from "../../assets/5.png"
import Events from "../../assets/6.png"
import Gaming from "../../assets/7.png"
import Gallery from "../../assets/8.png"
import Videos from "../../assets/9.png"
import Messages from "../../assets/10.png"
import Tutorials from "../../assets/11.png"
import Courses from "../../assets/12.png"
import Fund from "../../assets/13.png"
import AboutUsIcon from "../../assets/about-us.png"
import Donateicon from "../../assets/donate(1).png"
import Calendar from "../../assets/calendar.png"
import joinus from "../../assets/deal.png"
import { Link } from 'react-router-dom';


<Link to="/register">
<button>Register</button>
</Link>

const LeftBar = () => {
    return (
        <div className='leftBar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src="https://blog.ipleaders.in/wp-content/uploads/2021/11/Child-begging-1.jpg" alt="" />
                        <span>user</span>
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
                <hr />
                <div className="menu">
                    <span>Your shortcuts</span>
                    <div className="item">
                        <img src={Events} alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Tutorials} alt="" />
                        <span>TRAIL</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt="" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt="" />
                        <span>Messages</span>
                    </div>
                </div>
                <hr />
               

                
              
                </div>
        </div>
    );
};

export default LeftBar