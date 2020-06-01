import React,{useState, useEffect} from 'react';
import './App.css';
import HeaderF from './HeaderF';
import ShowCountries from './ShowCountries'

const App = () => {

    const [countries,setCountries] = useState(null);
  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  }, [])
  if (! countries){ return null}
  else { return <Xx contry={countries} />}
}
const Xx = (props) =>{

    return ( 
        <div id="second-form">
            <div>
              <HeaderF />
            </div>
        <ShowCountries all={props.contry} />
        </div>
    )
  }

export default App;