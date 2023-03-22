import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props.country.area)
    const {area,population,name,capital,flags}=props.country

    return (
        <div className='country'>
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Region:{capital}</p>
            <p><small>Area{area}</small></p>
            <p><small>Population{population}</small></p>

        </div>
    );
};

export default Country;