import React from "react";


// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/Posterslider/Posterslider.component";
import TempPosters from "../config/TempPosters.config";
//import Premier from "../components/Premier/Premier.component";

const HomePage = () => {
  return (
    <>
    <div className="flex flex-col gap-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
        
        </div>
        
          
          <div className="bg-bms-800 py-12 ">
          <div className="container mx-auto px-4 flex flex-col gap-3">
          <div className="hidden flex items-center justify-between md:flex">
          <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
          </div>
          <PosterSlider
              images={TempPosters}
              title="Premieres"
              subtitle="Brand new relases every friday"
              isDark
            />
          </div>

        </div>
        </div>
        <div className="container mx-auto px-4 my-8">
          <PosterSlider
          images={TempPosters}
          title="Online streaming events" 
          subtitle="Brand new releases every friday" 
          isDark={false}/>
        </div>
        <div className="container mx-auto px-4 my-8">
          <PosterSlider
          images={TempPosters}
          title="Outdoor events events" 
          subtitle="Brand new releases every friday" 
          isDark={false}/>
        </div>
      </>
      );
      };
      export default HomePage;