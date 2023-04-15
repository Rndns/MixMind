import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

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

export default function Slick(props) {
  const { musicImages } = props
  console.log(musicImages)
  // const {images} = musicImages
  // console.log({images})
  const navigate = useNavigate();

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
        {musicImages.map((music) => (
          <div key={music.id}>
            <img src={music.image} alt={`music-${music.id}`} height='256'
              onClick={() => {
                navigate(`/musicplaypage`)
              }} />
          </div>
        ))}
      </Slider>
    </div>
    // <Carousel>
    //   {musicImages.map((item) => (
    //     <Carousel.Item key={item.id}>
    //       <img
    //         className="d-block w-100"
    //         src={item.image}
    //         alt={`music-${item.id}`}
    //         onClick={() => {
    //           navigate(`/musicplaypage`)
    //         }}
    //       />
    //     </Carousel.Item>
    //   ))}
    // </Carousel>
  )
};
