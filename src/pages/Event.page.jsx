import React from "react";
import Poster  from "../components/Poster/Poster.component";
import EventsFilter from "../components/EventsFilter/Eventsfilter.component";
const  Events=()=>{
    return(
        <>
        <div className="container  mx-auto px-4 ">
       
            <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-3/4">
            <h2 className="text-xl font-bold">Plays in Hyderabad</h2>
               

<div   className="flex flex-wrap ">
    <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">
<Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312656-bpxenthdya-portrait.jpg"
                  title="Honey singh live in Hyderabad"
                  subtitle="Heart cup of coffee:...
                       club Gigs
                      ₹1099 onwards"
                />
    </div>
    <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">
<Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312656-bpxenthdya-portrait.jpg"
                  title="Honey singh live in Hyderabad"
                  subtitle="Heart cup of coffee:...
                       club Gigs
                      ₹1099 onwards"
                />
    </div>
    <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">
<Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312656-bpxenthdya-portrait.jpg"
                  title="Honey singh live in Hyderabad"
                  subtitle="Heart cup of coffee:...
                       club Gigs
                      ₹1099 onwards"
                />
    </div>
    <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">
<Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312656-bpxenthdya-portrait.jpg"
                  title="Honey singh live in Hyderabad"
                  subtitle="Heart cup of coffee:...
                       club Gigs
                      ₹1099 onwards"
                />
    </div>
    <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">
<Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312656-bpxenthdya-portrait.jpg"
                  title="Honey singh live in Hyderabad"
                  subtitle="Heart cup of coffee:...
                       club Gigs
                      ₹1099 onwards"
                />
    </div>
    <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">
<Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312656-bpxenthdya-portrait.jpg"
                  title="Honey singh live in Hyderabad"
                  subtitle="Heart cup of coffee:...
                       club Gigs
                      ₹1099 onwards"
                />
    </div>
    


</div>
            

            </div>
           
           
 <div className="lg:w-3/12">
 <h2 className="text-2xl font-bold mb-4">Filters</h2>
<div>
    <EventsFilter title="Date" tag={["Today","Tomorrow","This weekend"]}/>
    <EventsFilter title="language" tag={["Telugu","Tamil","English"]}/>
    <EventsFilter title="Categories" tag={["Threatre"]}/>
    <EventsFilter title="Genres" tag={["Drama","Adaptation","Comedy",
        "Historical","Mythological","Online Streaming Plays"]}/>
    <EventsFilter title="More Filters" tag={["Online Streaming",
                    "Kids allowed","Outdoor events"]}/>
    <EventsFilter title="Prices" tag={["Free","0-500","501-2000"]}/>
</div>
</div>
</div>
</div>
</>
    ) ;
};
export default Events;