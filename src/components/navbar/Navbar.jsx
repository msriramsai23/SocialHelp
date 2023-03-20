import "./navbar.scss"
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                <span>SocialHelp</span>
                </Link>
                <HomeOutlinedIcon/>
                <DarkModeOutlinedIcon/>
                <GridViewOutlinedIcon/>   
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="right">
               <PersonOutlineOutlinedIcon/>
               <EmailOutlinedIcon/>
               <NotificationsNoneOutlinedIcon/>
               <div className="user">
                  <img src="https://media.istockphoto.com/id/1252924066/photo/poor-indian-children-asking-for-help.jpg?s=612x612&w=0&k=20&c=iCfnyEJBALdrB8D_EZ0CI1lDgDHMZ8yCbwua6eNyEQ8=" alt=""/>
                  <span>blah blah</span>
               </div>
            </div>
        </div>
    )
}

export default Navbar