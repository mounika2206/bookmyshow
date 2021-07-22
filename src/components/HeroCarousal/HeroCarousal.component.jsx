


// Import css files
/*import React, { useState, useEffect } from "react";
import axios from "axios";
//import React from "react";
import HeroSlider from "react-slick";
import  {NextArrow,PrevArrow} from "./Arrows.components";


//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

const HeroCarousal=()=>
{
  const [images,setImages]=useState([]);
  useEffect(()=>
  { const requestNowPlayingMovies=async()=>
    {
      
        const getImages=await axios.get("/movie/now_playing");
        setImages(getImages.data.results);
    };
    requestNowPlayingMovies();

  },[]);

  const settingsLG={
    arrows:true,
    centerMode:true,
    centerPadding:"300px",
    slidesToShow:1,
    infinite:true,
    slidesToScroll:1,
    autoplay:true,

    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>

  }
  const settings = {
    arrows: true,
    //centerMode: true,
    //centerPadding:"200px",
   // dots:true,
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>
  };
  /*const image= [
    "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1626128665085-483747621778?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=610&q=80",
    "https://images.unsplash.com/photo-1622495894321-010d1e6db2a9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2775&q=80",
    "https://images.unsplash.com/photo-1591492654773-6756035bef6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGltYWdlcyUyMHJlYWx0ZWQlMjB0byUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1523249322636-7defc1f0c35a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzJTIwcmVhbHRlZCUyMHRvJTIwYm9va3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1626074961596-cab914d9392e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGltYWdlcyUyMHJlYWx0ZWQlMjB0byUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1608120663473-a4aa3472786b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGltYWdlcyUyMHJlYWx0ZWQlMjB0byUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1601255596436-3d600117f19e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGltYWdlcyUyMHJlYWx0ZWQlMjB0byUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
  ];*/
  /*return(
      <>
      <div className="lg:hidden">
      <HeroSlider {...settings}>
          {image .map((image)=>
          (
              <div className="w-full h-56 md:h-80 py:3">
                  <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full"/>

              </div>
          ))}
      </HeroSlider>
      </div>
      <div className=" hidden lg:block">
      <HeroSlider {...settingsLG}>
          {image .map((image)=>
          (
              <div className="w-full h-80 px-2 py-3">
                  <img src={image} alt="testing" className="w-full h-full"/>

              </div>
          ))}
      </HeroSlider>
      </div>
      </>

  );
};
export default HeroCarousal;*/




import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

// Compoenent

import  {NextArrow,PrevArrow} from "./Arrows.components";


const HeroCarousal = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };

    requestNowPlayingMovies();
  }, []);

  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;