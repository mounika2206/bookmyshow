import React from "react";
import Poster from "../Poster/Poster.component";
import PosterCarouselSettings from "../../config/PosterCarousel.config";
import PremierImages from "../../config/TempPosters.config";
const OnlineEntertainment=()=>
{
    return( <>
    <div className="flex flex-col items-start">
      <h3 className="text-white text-xl font-bold">Premiers</h3>
      <p className="text-white text-sm">Brand new release every Friday</p>
    </div>

      <Slider {...PosterCarouselSettings}>
        {PremierImages.map((image) => (
          <Poster {...image} isDark/>
        ))}
      </Slider>
    
    </>
    );
};
export default OnlineEntertainment;
