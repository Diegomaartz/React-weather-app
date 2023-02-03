import React, { useState } from "react";
import {AiOutlineSearch} from 'react-icons/ai' 

export default function CiudadForm({ onChangeCiudad }){

    const [ciudad, setCiudad] = useState('');

    function onChange(e){
        const valorc = e.target.value;

        if(valorc !== ""){
            setCiudad(valorc);
        }
    }

    function recibeSub(e){
        e.preventDefault();
        onChangeCiudad(ciudad);
    }

    return(
        
        <form onSubmit={recibeSub} className="search-bar">
            <AiOutlineSearch className='search-icon'/> 
            <input type='text' placeholder="Ingresa una Ciudad" onChange={onChange} className="texto-ciudad"/>
        </form>
    );
}