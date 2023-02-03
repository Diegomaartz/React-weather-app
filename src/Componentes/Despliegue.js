import React from "react";
import '../hojas-estilo/despliegue.css'
import { FiDroplet } from 'react-icons/fi'
import { BiWater } from 'react-icons/bi'
import { GiWindSlap, GiCompass } from 'react-icons/gi'

export default function Despliegue({ clima }) {
    return (
        <>
            <div className="despliegue-ciudad-panel">
                <div className="texto-ciudad">
                    <img src={`http:${clima?.current.condition.icon}`} className='icon-style' />
                    <h1 className="ciudad">{clima?.location.name}, {clima?.location.country}</h1>
                    <h2>{clima?.current.condition.text}     </h2>
                    <h2>{clima?.current.temp_c}ºC   |   {clima?.current.temp_f}ºF</h2>
                </div>
                <div className="info">
                    <div className="basic-info">
                        <h1>DATE | LOCALTIME:</h1>
                        <h2 className="date-hr">{clima?.location.localtime}</h2>
                    </div>

                    <div className="basic-info2">
                        <div className="viento">
                            <h2>WINDSPEED</h2>
                            <GiWindSlap className="icon-info2" />
                            <h3> {clima?.current.wind_kph} Km/h</h3>
                            <h2>DIRECTION</h2>
                            <h3> {clima?.current.wind_dir}</h3>
                            <GiCompass className="icon-compass"></GiCompass>


                        </div>
                        <div className="humedad">
                            <h2>HUMIDITY</h2>
                            <BiWater className="icon-info2" />
                            <h3> {clima?.current.humidity}%</h3>

                        </div>
                        <div className="precip">
                            <h2>PRECIPITATION</h2>
                            <FiDroplet className="icon-info2" />

                            <h3> {clima?.current.precip_in}%</h3>                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}