import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries,setcountreis]=useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setcountreis(data))
    },[])
    return (
        <div>
            <h1>All Countries Here:{countries.length}</h1>
            <div className='Countries-container'>
            {
                countries.map(country=><Country country={country} 
                    key={country.cca3}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;