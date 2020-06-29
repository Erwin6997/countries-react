import React from 'react';

const HeaderF =(props) =>{
    return(
        <div className="container">
            <h3>Where Are You Living :</h3>
                <input type="text" className="search" placeholder="search for a country..."></input>
            <select id="dropdown-list" className="dropdown-list" onChange={props.handelClick} > 
                {
                    props.regionC.map((reigin, index) => {
                        return( <option value={reigin}>{reigin}</option>)
                    })}
            </select>    
        </div>
    );
}
export default HeaderF;