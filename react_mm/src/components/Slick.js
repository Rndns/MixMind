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
  const { musicInfos } = props
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
      {/* <h1>Single Item</h1> */}
      <Slider {...settings}>
        {musicInfos.map((musicInfo) => (
          <div key={musicInfo.id}>
            <img src={musicInfo.albumImg} alt={`musicInfo-${musicInfo.id}`} height='256'
              onClick={() => {
                navigate(`/musicPlayer`,{
                  state: {
                    musicInfo: musicInfo
                  },
                  replace: false
                })
              }} />
          </div>
        ))}
      </Slider>
    </div>
    // <Carousel>
    //   {musicInfo.map((item) => (
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
