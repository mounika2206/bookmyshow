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







 /*<Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
              castName="Henry Cavil"
              role="Superman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
              castName="Gal Gadot"
              role="Wonder Woman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
              castName="Henry Cavil"
              role="Superman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
              castName="Gal Gadot"
              role="Wonder Woman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
              castName="Ben Affleck"
              role="Batman"
            />*/






















            /*import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Paymentmodal({isOpen,setIsOpen,price})
{
  function closeModal() {
    setIsOpen(false);
  }

  
  const 

  return (
<>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            /*<span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Please make a Payment
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Hello please click on the button to make payment.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={closeModal}
                  >
                    Pay₹{price}
                  </button>
                  <button
                    type="button"
                    className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700  border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={closeModal}
                  >
                    CancelPayment
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
*/


















//import React,{useContext, useState} from 'react';
//import Movie from '../../pages/Movie.page';/
//import {MovieContext} from "../../context/movie.context";
import Paymentmodal from "../PaymentModel/Payment.component";

/*const MovieInfo = () => {
    const[isOpen,setIsOpen]=useState(false);
    const[price,setprice]=useState(0);
    const {movie}=useContext(MovieContext);
    const genres=movie.genres?.map(({name})=>name).join(",");
    const rentmovies=()=>
    {
        setIsOpen(true);
        setprice(149);
    };
    const buymovies=()=>
    {
        setIsOpen(true);
        setprice(599);
    };

    /*return (
        <>
        <Paymentmodal setIsOpen={setIsOpen} isOpen={isOpen} price={price}/>
        <div className="flex flex-col gap-3  lg:gap-8">
            
    <div className="flex items-center gap-3 md:px-4">
        <div className="w-40 h-8">
            <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
            alt="priemer"
             className="w-full h-full"
             />

        </div>
        <span className="bg-bms-700 p-1 text-xs text-white rounded-md">Streaming Now</span>
    </div>
        <h1 className="hidden lg:block text-white lg:text-5xl font-bold">
            {movie.original_title} </h1>
        <div className="flex flex-col-reverse  lg:gap-5 lg:flex-col">
        <div className="text-white font-light flex flex-col gap-2 md:px-4">
            <h4>4k &bull; {movie.original_language}</h4>
            <h4>{(movie.runtime/60).toFixed(2)}h &bull; {genres} &bull;13+</h4>

        </div>
        <div className="flex item-center gap-3 md:w-screen md:px-4 lg:w-full">
            
        <button onClick={rentmovies} className="bg-red-600 text-white font-semibold
         rounded-lg w-full py-3" >Rent ₹149</button>
        <button onClick={buymovies} className="bg-red-600 text-white font-semibold rounded-lg w-full py-3" >Buy ₹599</button>
        </div>
        </div>
        </div>
        </>
    );
};

export default MovieInfo;
*/




import React, { useContext, useState } from "react";

// components
import Paymentmodal from "../PaymentModel/Payment.component";

// Context
import { MovieContext } from "../../context/movie.context";

const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const { movie } = useContext(MovieContext);

  // optional chaining.
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  const rentMovies = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovies = () => {
    setIsOpen(true);
    setPrice(599);
  };

  return (
    <>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-3 lg:gap-8">
        <div className="flex items-center gap-3 md:px-4">
          <div className="w-40 h-8">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premier"
              className="w-full h-full"
            />
          </div>
          <span className="bg-bms-700 p-1 text-xs text-white rounded-md">
            Streaming now
          </span>
        </div>
        <h1 className="text-white lg:text-5xl font-bold hidden lg:block ">
          {movie.original_title}
        </h1>
        <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col">
          <div className="text-white font-light flex flex-col gap-2 md:px-4">
            <h4>4k &bull; {movie.original_language}</h4>
            <h4>
              {(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull; 13+
            </h4>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
            <button
              onClick={rentMovies}
              className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
            >
              Rent ₹149
            </button>
            <button
              onClick={buyMovies}
              className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
            >
              Buy ₹599
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;

















import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function PaymentModal({ isOpen, setIsOpen, price }) {
  function closeModal() {
    setIsOpen(false);
  }

  const launchRazorPay = () => {
    let options = {
      key: "rzp_test_xb1XrKFhTQwX2U",
      amount: price * 100,
      currency: "INR",
      name: "Book My Show Clone",
      description: "Movie Purchase or Rental",
      image:
        "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
      handler: () => {
        setIsOpen(false);
        alert("Payment Done");
      },
      theme: { color: "#c4242d" },
    };

    let razorPay = new window.Razorpay(options);
    razorPay.open();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto z-50"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Please make a payment
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Hello Please click on the below button to make a payment.
                  </p>
                </div>

                <div className="w-full mt-4">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={launchRazorPay}
                  >
                    Pay ₹{price}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={closeModal}
                  >
                    Cancel Payment
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}




/*import React ,{useState} from "react";
 export const MovieContext=React.createContext();
 const MovieProvider=({children})=>
{
    const [movie,setMovie]=useState({
        id:0,
        original_title="",
        overview="",
        backdrop_path:"",
        poster_path:"",
    });
    return (
        <MovieContext.Provider value={{ movie, setMovie }}>
          {children}
        </MovieContext.Provider>
      );
    };
    
    export default MovieProvider;
    */
/*import React,{useEffect,useContext} from "react";
import { useParams } from "react-router-dom";
import MovieNavbar from "../components/Navbar/movieNavbar.component";
//import React,{useEffect,useContext} from "react";
import {MovieContext} from "../context/movie.context";
import axios from "axios";

const MovieLayout=(props)=>
{
    const {id} =useParams();
    const{movie,setMovie}=useContext(MovieContext);
    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
          };
          requestMovie();
        }, [id]);
    return(
        <>
        <MovieNavbar/>
        {props.children}
        </>
    );
};
export default MovieLayout;*/





