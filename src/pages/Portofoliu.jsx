import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./Portofoliu.css";

function Portofoliu() {
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slideshowImages = [
    "/images/images-kitchen/MDF-Vopsit/albastru/IMG_20170131_205904.jpg",
    "/images/images-comercial/p33.jpg",
    "/images/images-dressing/p17.jpg",
    "/images/images-kitchen/p4.jpg",
    "/images/images-living/p10.jpg",
    "/images/images-kitchen/p6.jpg",
    "/images/images-comercial/p35.jpg",
    "/images/images-kitchen/p36.jpg",

  ];

  const handleSlideClick = () => {
    navigate("/grid-portofoliu"); // noua pagină
  };

  return (
    <div className="portofoliu-container">
      <h2 className="text-center my-4">Portofoliu Mobilă</h2>

      <div className="slideshow mb-5" onClick={handleSlideClick} style={{ cursor: "pointer" }}>
        <Slider {...sliderSettings}>
          {slideshowImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Mobila ${index + 1}`} className="slider-img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Portofoliu;
