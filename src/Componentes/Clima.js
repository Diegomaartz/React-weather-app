import React, {useEffect, useState} from "react";
import CiudadForm from './ciudadForm';
import Despliegue from './Despliegue';
import '../hojas-estilo/Clima.css'
import logow from '../Imagenes/Logo.png'

export default function Clima() {

    const [clima, setClima] = useState(null);

    async function loadInfo(ciudad = 'LONDON'){
        try {
                const request = await fetch(
                    `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${ciudad}`
                    );
                const json = await request.json();
                console.log(json);
                setClima(json);
        } catch (error) {
            
        }
    }

    function handleChangeCity(ciudad){
        setClima(null);
        loadInfo(ciudad);
    }
    
    useEffect( () => {
        loadInfo();
    }, []);

    useEffect( () =>{
        document.title = `Weather in ${clima?.location.name ?? ''}`;
    }, [clima]);


    return (
        <>
            <div className="banner">
            <img src={logow} className="logito"></img>  
            <h1 className="title">REACT WEATHER APP</h1>
                <CiudadForm onChangeCiudad = {handleChangeCity}/>
            </div>
        
            <div className="panel">
                <Despliegue clima={clima}/>
            </div>
        </>
    );
}