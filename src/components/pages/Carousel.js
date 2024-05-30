import React from 'react';
import Slider from "react-slick";
import "./Carousel.css"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className }
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",}}
      onClick={onClick}
    />
  );
  
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
   <div className="slider-container">
      <Slider {...settings}>
        <div className='card'>
          <img src="./Pics/massage.jpg" alt="massage" width="100%" heigh="200px" />
          <div className='card-body'>
            <h4>
              Massage
            </h4>
            <button className='Btn'>Book now</button>
          </div>
        </div>
        <div className='card'>
        <img src="./Pics/facial.jpg" alt="facial" width="100%" heigh="200px"/>
        <div className='card-body'>
            <h4>
              Signature Facial
            </h4>
            <button className='Btn'>Book now</button>
          </div>
        </div>
        <div className='card'>
        <img src="./Pics/wax.jpg" alt="wax" width="100%" heigh="200px"/>
        <div className='card-body'>
            <h4>
              Waxing
            </h4>
            <button className='Btn'>Book now</button>
          </div>
        </div>
        <div className='card'>
        <img src="./Pics/lashes.jpg" alt="lashes" width="100%" heigh="200px"/>
        <div className='card-body'>
            <h4>
              Lash Extensions
            </h4>
            <button className='Btn'>Book now</button>
          </div>
        </div>
        <div className='card'>
        <img src="./Pics/perm.jpg" alt="perm"width="100%" heigh="200px"/>
        <div className='card-body'>
            <h4>
            Permanent Makeup
            </h4>
            <button className='Btn'>Book now</button>
          </div>
        </div>
        <div className='card'>
        <img src="./Pics/botox.jpg" alt="botox"width="100%" heigh="200px"/>
        <div className='card-body'>
            <h4>
              Botox & Fillers
            </h4>
            <button className='Btn'>Book now</button>
          </div>
        </div>
        <div className='card'>
        <img src="./Pics/laser.jpg" alt="laser"width="100%" heigh="200px"/>
        <div className='card-body'>
            <h4>
              Laser Hair Removal
            </h4>
            <button className='Btn'>Book now</button>
          </div>
        </div>
        <div className='card'>
        <img src="./Pics/sauna.jpg" alt="sauna"width="100%" heigh="200px"/>
        <div className='card-body'>
            <h4>
              Sauna
            </h4>
            <button className='Btn'>Book now</button>
          </div>
        </div>
      </Slider>
    </div>
  )
}


export default Carousel;