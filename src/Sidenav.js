import './Sidenav.css';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import ToTopButton from './ToTopButton';
import logo from './Pictures/Hatsune_miku_logo_v3.png';
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Sidenav = () => {

     return (  
          <nav className="sidenav">
               <Link to ="/"> 
                    <img src={logo} alt="logo"/>
               </Link>

               <div className="links">
                    <HashLink smooth to='/#timeline'>TIMELINE</HashLink> 
                    <Link to ="/HowToJoin" id ="join">HOW TO JOIN</Link>
                    <HashLink smooth to='/#about'>ABOUT</HashLink>
               </div>

               <div className="iconGroup">
                    <a href="https://twitter.com/cfm_miku">
                         <BsTwitter className='iconStyle' />
                    </a>
                    <a href="
                    <FaFacebookF className='iconStyle' />">
                         <BsYoutube className='iconStyle' />
                    </a>
                    <a href="https://www.facebook.com/HatsuneMikuOfficialPage/">
                         <FaFacebookF className='iconStyle' />
                    </a>
               </div>

               <ToTopButton />

          </nav>
     );
}
 
export default Sidenav;