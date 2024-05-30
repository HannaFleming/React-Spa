import './Navbar.css';
import img from "./pages/pictures/Harmony_Spa-removebg-preview.png";
import{ NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Button, Modal, Navbar} from 'react-bootstrap';
import { CartContext } from './pages/CartContext';
import CartProduct from './CartProduct';


// export const Navbar = () => {

    

    function NavbarComponent(){

        
    const [BarsOpen,  setBarsOpen] = useState(false);
    
    const cart = useContext(CartContext);
    const [ show, setShow] =useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    return (
        <div className="Bars" onClick={() => {
setBarsOpen(!BarsOpen)}}>

<Navbar expand="sm">
    <Navbar.Brand><img src={img} className="Logo" width='240px' height="240px" alt="logo"/></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className='justify-content-end'>
        
        <ul className = { BarsOpen ? "open" : ""}>
    <li><NavLink to="/" className='Links'>Home</NavLink></li>
 <li><NavLink to="/spaMenu" className='Links'>Spa Treatments</NavLink></li>
 <li><NavLink to="/products" className='Links'>Products</NavLink></li>
 <li><NavLink to="/membership" className='Links'>Membership</NavLink></li>
 <li> <Button  className="Links"  onClick={handleShow}>Cart ({productsCount} Items)</Button></li>
         </ul>
         
</Navbar.Collapse>
</Navbar>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
    <Modal.Title>Shopping Cart</Modal.Title>
</Modal.Header>
<Modal.Body>
    {productsCount > 0 ?
    <>
    <p>Items in your cart:</p>
    {cart.items.map((currentProduct, idx) => (
 
       <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
    ))}

    <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
    <Button variant="success">
        Purchase items!
    </Button>
    </>
    :
    <h1>There is no items in  your cart!</h1>
    }
</Modal.Body>
</Modal>


</div>

    )}
export default NavbarComponent;
