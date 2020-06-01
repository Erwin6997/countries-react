import React,{useState, useEffect} from 'react';
import ShowCountries from './ShowCountries';
import App from './App';

const Fetch = () =>{
    const [countries,setCountries] = useState(null);
  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  }, [])
    if (!countries) {
      return null 

    }else{
      return <App country={countries} />
    }
}

export default Fetch;