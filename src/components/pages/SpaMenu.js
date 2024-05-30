import { React, useState } from 'react';
import { data } from './SpaMenuData';
import './Spa.css'
import { Row, Col } from 'react-bootstrap';


function SpaMenu() {
  const [ services, setServices] = useState(data);

  return(
    <div>
      <div className='container'>
     <h1>Our Services {services.lenght}</h1> 
    </div>
    
    {services.map((element => {
      const { id, image, title } = element;

      return(
        
      <Row xs={2} md={3}>
      <div className='container la '>
       <img src={image} width="300px"/>
       <h2>{id} - {title}</h2>            
      </div> 
      </Row>)
    }))}
    </div>
  )
}
export default SpaMenu;
 
