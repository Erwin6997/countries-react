import React from 'react';

const HeaderF =() =>{
    return(
        <div className="container">
            <h3>Where Are You Living :</h3>
                <input type="text" class="search" placeholder="search for a country..."></input>
            <select class="dropdown-list"> 
                <option  value="-- All Region --">-- All Region --</option>
                <option  value="Africa">Africa</option>
                <option  value="Americas">America</option>
                <option  value="Asia">Asia</option>
                <option  value="Europe">Europe</option>
                <option  value="Oceania">Oceania</option>
            </select>    
        </div>
    );
}
export default HeaderF;