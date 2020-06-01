import React from 'react';

const HeaderF =() =>{
    return(
        <div>
            <div>
                <input type="text" id="searchInput" class="form-search" placeholder="search for a country..." aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <select id="dropdowns" class="dropdown-list"> 
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