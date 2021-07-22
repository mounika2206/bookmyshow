import react from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.component";
import PosterCarouselSettings from "../../config/PosterCarousel.config";


const PosterSlider=(props)=>
{
  const sliderconfig=props.config?props.config:PosterCarouselSettings
    return (
        <>
    <div className="flex flex-col items-start">

    <h3
          className={` text-2xl font-bold ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={` text-sm ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.subtitle}
        </p>
    </div>

      <Slider {...sliderconfig}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark}/>
        ))}
      </Slider>
      
    </>
    );

};
export default PosterSlider;