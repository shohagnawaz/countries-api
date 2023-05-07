import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div className='country'>
           <h2>Name: {props.country.name.common}</h2>
           <img src={props.country.flags.png} alt=''/> 
           <h4>Popluation: {props.country.population}</h4>
           <p>Area: {props.country.area}</p>
           <p>Region: {props.country.region}</p>
        </div>
    );
};

export default Country;