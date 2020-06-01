import React from "react";
const ShowCountries = (props) => {
console.log("data:"+props.all);
    return ( 
    <div className="con">
        {props.all.map((country,index) => {
            return (
            <div key={index} class="countries">
                    <img class="image" src={country.flag} ></img>
                    <h2 class="nameC">{country.name}</h2>
                    <p>Population :{country.population}</p>
                    <p class="region">Region : {country.region}</p>
                    <p>Capital : {country.capital}</p>
            </div>
            );
        })}
    </div>
 );
};

export default ShowCountries;