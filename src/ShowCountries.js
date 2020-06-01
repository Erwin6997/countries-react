import React from "react";

const ShowCountries = (props) => {
console.log("data:"+props.all);
    return ( 
    <div className="con">
        {props.all.map((country,index) => {
            return (
            <div class="countries">
                <div>
                    <img class="image" src={country.flag}></img>
                </div>
                <div>
                    <h2 class="nameC">{country.name}</h2>
                    <p>Population :{country.population}</p>
                    <p class="region">Region : {country.region}</p>
                    <p>Capital : {country.capital}</p>
                </div>
            </div>
            );
        })}
    </div>
 );
};

export default ShowCountries;