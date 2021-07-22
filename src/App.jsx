import { Route } from "react-router-dom";
import axios from "axios";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Play from "./pages/plays.page";
import Events from "./pages/Event.page";
import Activities from "./pages/Activities.page";
import Sports from "./pages/Sports.page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays"  exact component={Play}/>
      <DefaultHOC path="/events" exact component={Events}/>
      <DefaultHOC path="/sports" exact component={Sports}/>
      <DefaultHOC path="/activities" exact component={Activities}/>
    </>
  );
}

export default App;


