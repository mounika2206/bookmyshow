import React from "react";
import Poster  from "../components/Poster/Poster.component";
import SportsFilter from "../components/SportsFilter/SportsFilter.component";
const  Sports=()=>{
    return(
        <>
        <div className="container  mx-auto px-4 ">
       
            <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-3/4">
            <h2 className="text-xl font-bold">Plays in Hyderabad</h2>
               

<div   className="flex flex-wrap ">
    <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">
<Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00137986-rglrembfmb-portrait.jpg"
                  title="Indian Chess League 2021"
                  subtitle="Online(Play from Home)
                       Esports
                      ₹99 onwards"
                />
    </div>
    <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">
<Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00137986-rglrembfmb-portrait.jpg"
                  title="Indian Chess League 2021"
                  subtitle="Online(Play from Home)
                       Esports
                      ₹99 onwards"
                />
    </div>
    <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">
<Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00137986-rglrembfmb-portrait.jpg"
                  title="Indian Chess League 2021"
                  subtitle="Online(Play from Home)
                       Esports
                      ₹99 onwards"
                />
    </div>
    <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">
<Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00137986-rglrembfmb-portrait.jpg"
                  title="Indian Chess League 2021"
                  subtitle="Online(Play from Home)
                       Esports
                      ₹99 onwards"
                />
    </div>
    <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">
<Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00137986-rglrembfmb-portrait.jpg"
                  title="Indian Chess League 2021"
                  subtitle="Online(Play from Home)
                       Esports
                      ₹99 onwards"
                />
    </div>


    <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">
<Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00137986-rglrembfmb-portrait.jpg"
                  title="Indian Chess League 2021"
                  subtitle="Online(Play from Home)
                       Esports
                      ₹99 onwards"
                />
    </div>
    
    
    


</div>
            

            </div>
           
           
 <div className="lg:w-3/12">
 <h2 className="text-2xl font-bold mb-4">Filters</h2>
<div>
    <SportsFilter title="Date" tag={["Today","Tomorrow","This weekend"]}/>
    <SportsFilter title="language" tag={["Telugu","Tamil","English"]}/>
    <SportsFilter title="Categories" tag={["Threatre"]}/>
    <SportsFilter title="Genres" tag={["Drama","Adaptation","Comedy",
        "Historical","Mythological","Online Streaming Plays"]}/>
    <SportsFilter title="More Filters" tag={["Online Streaming",
                    "Kids allowed","Outdoor events"]}/>
    <SportsFilter title="Prices" tag={["Free","0-500","501-2000"]}/>
</div>
</div>
</div>
</div>
</>
    ) ;
};
export default Sports;