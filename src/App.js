import React,{useState, useEffect} from 'react';
import './App.css';
import HeaderF from './HeaderF';
import ShowCountries from './ShowCountries'
import Footer from './Footer';

const App = () => {
  const [name, setName] = useState(null);
  const [countries,setCountries] = useState(null);
  const regionC = ["All Region", "Africa", "America", "Asia", "Europe", "Oceania"]

  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  }, [])
  if (! countries){ return null}
  else {console.log(name)}

  const region =() => {
    const selectRegion = document.querySelector('.dropdown-list').value;
    console.log(selectRegion);
    if(selectRegion === regionC[0]){
      setCountries(name)
    }else{
      setCountries(name.filter(item => item.region === selectRegion))
    }
  }
  return ( 
      <div id="second-form">
        <div>
          <HeaderF handelClick={region} regionC={regionC}/>
        </div>
        <ShowCountries all={countries} />
        <Footer />
      </div>
    )
}

export default App;