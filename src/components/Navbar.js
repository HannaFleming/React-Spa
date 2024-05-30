import './Navbar.css';
import img from "./pages/pictures/Harmony_Spa-removebg-preview.png";
import{ Link } from 'react-router-dom';


    function NavbarComponent(){

        
    return(

 <nav>
<img src={img} className="Logo" width='240px' height="240px" alt="logo"/>
<ul >
    <li><Link to="/" className='Links'>Home</Link></li>
 <li><Link to="/spaMenu" className='Links'>Spa Treatments</Link></li>
 <li><Link to="/products" className='Links'>Products</Link></li>
 <li><Link to="/membership" className='Links'>Membership</Link></li>
         </ul>
         </nav>         
  ) } 
export default NavbarComponent;
