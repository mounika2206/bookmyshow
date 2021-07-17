/*const User=(props)=>
{
    return (
        <div>
            <h1>
                {props.name}
            </h1>
            <p>{ props.description}</p>
           
        </div>
    );
};
export default User;
//props=> <properties />
<parameters></parameters>
*/
/*import  React from "react";
class User extends React.Component{
    constructor(props)
    {super(props);
        this.state={
            planet:"earth",
        };
       console.log("I am from constructor");
    }
    componentDidMount()
    {
        this.setState({planet:"Mars"});
    }
    static getDerivedStateFromProps(prop,state)
    {
        console.log("I am from derived state from props");
        return {planet: "Jupiter"};
    }
    shouldComponentUpdate(nextProp,nextState)
    {
        console.log("from shouldcomponentupdate");
        console.log({
            nextProp,
            nextState,
        });
        return false;

    }

    getSnapshotBeforeUpdate(prevProp,prevState)
    {

    console.log({
    prevProp,
    prevState,
});
return false;
    }

    componentDidUpdate()
    {
console.log(this.state);
    }
    render()
    {
        console.log("I am from render()");
        //component lifecycle methods
        return (
        <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.description}</p>
            <h4>{this.state.planet}</h4>
        </div>
        );
    }
}

export default User;*/




import React ,{useState,useEffect} from "react";

const User=(props)=>
{
    const [planet,setPlanet]=useState("earth");
    console.log(planet);
    useEffect(()=>
    {
      // setPlanet("jupyter");
    
        return  console.log("bye bye");
     },[] );
     useEffect(()=>
     {
         console.log("planet changes");
     },[planet]);

    return(
    <div>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <button onClick={()=>
    setPlanet("pluto")}>{planet}

    </button>
    </div>
    );
};
export default User;