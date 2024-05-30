import { Row, Col } from 'react-bootstrap';
import { productsArray } from './ProductsData';
import  ProductCard  from './ProductCard';


function Products(){
    return(
        <div>
            
            <h1 align="center" className="p-3">New and Award-Winning Products</h1>
                    <Row xs={2} md={3}  className="g-4" >
                        {productsArray.map((product, idx) => (
                        <Col align="center" key={idx}>
                            <ProductCard product={product}/>
                        </Col> 
        ))}
                    </Row>
        
       

    </div> 
)}
export default Products;