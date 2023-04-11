import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "white", background: "black" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "white", background: "black" }}
      onClick={onClick}
    />
  );
}




const ImageSlider = (props) => {
  const navigate = useNavigate();
  const { imagesData } = props.imagesData
  console.log(imagesData)
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <div>
      <h1>Single Item</h1>
      <Slider {...settings}>
        {imagesData.map((img, i) => (
          <div key={i}>
            <img src={img} alt='load fail' height='256'
              onClick={() => {
                navigate(`/musicplaypage`)
              }} />
          </div>
        ))}
      </Slider>
    </div>
  )
};

export default ImageSlider;