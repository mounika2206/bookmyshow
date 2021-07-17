App.jsx


/*import User from "./components/user";

function App() {
  return( <div>
    <h1>users</h1>
    <User name="Mounika" description="FSWD"/>
    <User name="Deepika" description="Data analytics"/>
    <User name="Reddy" description="Data analyst"/>
    
  </div>
  );
}

export default App;
*/


/*function App()
{
  return(
  <div className="App px-10">
      
      <button className="border-2
       px-6
        py-2

        border-blue-500
       md:border-red-500
       lg:border-green-500
       md:bg-red-500
       lg:bg-green-500
        rounded bg-blue-500
        text-white
        hover:bg-transparent
        hover:border-2
        hover:text-blue-500
        md:hover:text-red-500
        lg:hover:text-green-500
        outline-none
        focus:outline-none
        focus:ring
        focus:border-blue-300
       md: focus:border-red-300
       lg:focus:border-green-500"
         >
        Hello TailWind</button>
        <h1 className="text-mounika-500">Mounika</h1>
      
    </div>
  );
}
export default App;*/


/*import { Route} from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";
import Temp from "./components/temp";


function App()
{
  return(
    <>
    <DefaultHOC path="/"  exact component={Temp}/>
    </>
  );
};
export default App;*/



Temp.jsx



/*import React from 'react'
function Temp()
{
    return<h1 className="text-2xl"> Hello I amMounika</h1>;
}
export default Temp;*/


default hoc jsx

/*import React from "react";
import {Route} from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";
const DefaultHOC=({component:Component,...rest})=>
{
    return(
        <>
        <Route
        {...rest}
         component={(props)=>
        (
        <DefaultLayout>
            <Component{...props}/>
        </DefaultLayout>
        )}
        />
        </>
    );
};
export default DefaultHOC;*/


/*import React from "react";

const DefaultLayout = (props) => {
  return (
    <>
      <h1 className="text-xl">Default Layout</h1>
      {props.children}
    </>
  );
};

export default DefaultLayout;*/





/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/



 // src/index.js
 /*import React from 'react';
 import ReactDOM from 'react-dom';
 import {BrowserRouter} from "react-router-dom";
import './index.css';
 import App from './App';
 

 ReactDOM.render(
   <React.StrictMode>
     <BrowserRouter>
     <App />
     </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
 );
*/






// tailwind.config.js
  /*module.exports = {
    purge: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    /*   theme: {
         extend: {
           colors:
           {
             mounika:
             {
               50:"#edf1fc",
               100:"#f3c1c3",
               200:"#e5999c",
               300:"#da7175",
               400:"#cf4a4c",
               500:"#b53035",
               600:"#8e2528",
               700:"#661a1d",
               800:"#3e0d10",
               900:"#1b0203",
             },
             bws:
             {
              
                50: '#edf1fc',
                100: '#d3d4e1',
                200: '#b6b8c9',
                300: '#989bb2',
                400: '#7c7f9b',
                500: '#636582',
                600: '#4c4f66',
                700: '#363849',
                800: '#21222e',
                900: '#0a0a16',
              
             },
           },
         },
       },
       variants: {
         extend: {},
       },
       plugins: [],
     };*/





     /*import React from "react";
import Navbar from "../components/Navbar/navbar.component";
// eslint-disable-next-lin
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
const DefaultLayout=(props)=>
{
    return(
    <>
        
        <Navbar/>
        {props.children}
    </>
    );
};
export default DefaultLayout;*/






/*import Route  from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
// Components
import Temp from "./components/temp";
function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}
export default App;
import React from "react";

import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";

import HomePage  from "./pages/Home.page";

// Pages


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}

export default App;*/




/*import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
    </>
  );
};

export default HomePage;*/

/*import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";

import MovieHOC from "./HOC/Movie.HOC";

// Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/id" exact component={Movie}/>
    </>
  );




}

export default App;*/

/*const Movie=()=>
{
    return<>
    Hi i am Movie pages
    </>
};
export default Movie;*/




/*import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/Posterslider/Posterslider.component";
import TempPosters from "../config/TempPosters.config";

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
      
      <div className="bg-bms-800 py-12">
        <div className="container mx-auto px-4 flex flex-col gap=3">
        <div className="hidden items-center justify-between md:flex">
          <img
            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
            alt="Rupay"
            className="w-full h-full"
          />
        </div>
        <PosterSlider
        images={TempPosters}
        title="Premiers"
        subtitle="Brand new relases very friday"
        isDark
        />
          
        </div>

      </div>
 </div>


 <div className="container mx-auto px-4 my-8">
  <PosterSlider
  images={TempPosters}
  title="Outdoor events"
  isDark={false}/>
</div>

    </>
  );
};

export default HomePage;*/



/*React from 'react'

export const MovieInfo= () => {
    return (
        <div flex>
            <div>
                <div className="w-40 h-8">
                    <img src="" alt="image" className="w-full h-full"/>
                </div>
                <span className="bg-bms-700 p-1 text-xs text-white rounded-md">Streaming Now</span>
            </div>

           
            <h1 className="text-white lg:text-5xl font-bold"> Justice League</h1>
            <div className="">
            <div  className="text-white font-light">
                <h4>4k &bull; English &bull; Action</h4>
                <h4>1h 53m &bull; Action,Sci-Fi,Thriller &bull;13+ </h4>
            </div>
            <div className="flex items-center gap-3">
                <button className="bg-red-600 py-3 text-white font-semibold
                rounded-lg w-full">Rent 149</button>
                <button className="bg-red-600 py-3 text-white font-semibold
                rounded-lg w-full">Buy 149</button>
            </div>
            </div>
        </div>
    );
};
*/



/*import React from "react";
import { MovieInfo } from "./MovieInfo.component";
const MovieHero=()=>
{
    return(
        <>

        <div
         className="md:hidden w-full" 
        style={{height:"calc(180vh)"}}
        >
<div className=" w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0"/>
            <img src=""
            alt="poster"
            className="w-full h-full"/>
    </div>


        </>
    );
};
export default MovieHero;*/

/*import React from 'react'

const MovieHero= () => {
    return (
        <>
        <div>
            <div className="relative md:hidden w-full"
            style={{height:"calc(180vw)"}}>
           <div className="w-full h-56 bg-opacity-50 absolute  bg-black z-10 bottom-0" />  
    
           <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
         className="w-full h-full"/>
         

            </div>
            <div className=" relative hidden md:block h-96 lg:hidden"
            style={{height:"calc{100vw"}}>
                <div className="w-full h-56 bg-opacity-50 absolute  bg-black z-10 bottom-0" />  
            <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
         alt="logo"
         className="w-full h-full"/>
            </div>
            <div className="realtive hidden lg:block" style={{height:"30rem"}}>
                <div className="absolute z-10 w-full h-full " style=
                {{
                    backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"
                }}/>
                <div className="absolute w-64  z-30 h-96 left-24 top-20">
                    <img  src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                    alt="poster"
                    className="w-full h-full rounded-xl"/>
                </div>
            <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
         alt="logo"
         className="w-full h-full"/>
            </div>
            
        </div>
        </>
    );
};

export default MovieHero;
*/


/*import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line
//import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
*/

/*const settings={
    infinity:false,
    autoplay:false,
    slidesToshow:5,
    slideToScroll:2,
    InitialSlide:0,
    responsive:[
        {
            breakpoints:1024,
            settings:
            {
                slidesToshow:3,
                slideToScroll:2,
                infinite:true,
            },
        },
        {
            breakpoints:600,
            settings:
            {
                slidesToshow:2,
                slideToScroll:1,
                InitialSlide:1,
            },
        },  
        {
            breakpoints:600,
            settings:
            {
                slidesToshow:2,
                slideToScroll:1,
        },
        },
    ],
};
export default settings;*/

/*const settings = {
    infinite: false,
    autoplay: false,
    speed:500,
    slidesToShow: 5,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          InitialSlide: 2,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  export default settings;*/




  /*import React from "react";
import {
  BiChevronRight,
  BiSearch,
  BiMenu,
  BiChevronDown,
  BiShareAlt
} from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All starts Here!</h3>
          
        </div>

        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, Plays, Sports and Activities."
      />
    </div>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-12 h-12">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, Plays, Sports and Activities."
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
            Hyderabad <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

/*const MovieNavbar = () => {
  return (
    <>
      <nav className="absolute inset-x-0 z-30 bg-opacity-10  backdrop-filter
      backdrop-blur-lg lg:relative
      lg:lg-bms-700 p-4">
        <div className="md:hidden">
          {/* Mobile screen */
          /*<NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/* Medium/Tab screen */
        /*  <NavMd />
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large screen */
          /*<NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;*/






/*import React from "react";
import {
  BiChevronRight,
  BiSearch,
  BiMenu,
  BiChevronDown,
  BiShareAlt,
} from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All starts Here!</h3>
          
        </div>
        <div className="w-8 h-8">
        <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
/*const NavMd = () => {
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, Plays, Sports and Activities."
      />
    </div>
  );
};*/
/*const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-12 h-12">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, Plays, Sports and Activities."
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
            Hyderabad <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className=" absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg 
      lg:relative lg:bg-bms-700 p-4">
        <div className="md:hidden">
          {/* Mobile screen */
         /* <NavSm />
        </div>
        <div className="hidden md:block lg:hidden">
          {/* Medium/Tab screen */
        /*  <NavSm/>
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large screen */
          /*<NavLg />
        </div>
      </nav>
    </>
  );
};


export default MovieNavbar;*/







