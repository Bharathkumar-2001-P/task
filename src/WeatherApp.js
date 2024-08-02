//Weather Application  -- current state
// UI
import { useState } from "react";
import FeatchWeather from "./FeatchWeather"
export default function WeatherApp(){
    const [query,setQuery] = useState("");
    const [weather,setWeather]=useState({});
    const change=(e)=>{
        console.log(e.target.value);
        setQuery(e.target.value)
    }
    const search = async (e)=>{
        if(e.code === "Enter"){
     let data =   await FeatchWeather(query);
     setWeather(data)
    }
}
    return(
        <div>
            <input type="text" value={query} onChange={change} onKeyPress={search} placeholder="Enter The City name"/>

            {weather.main &&

            <div className="weather_data">
                <div id="city">
                    {weather.name}<span>{weather.sys.country}</span>

                </div>
                <div id="temp">
                    {Math.round(weather.main.temp)}<span>deg c</span>
                </div>
                <div id="info">
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                    {weather.weather[0].description}
                </div>
                <div id="pressure">
                   {weather.main.pressure} mbars
                </div>
                <div id="humiditt">
                   {weather.main.humidity} hr/s
                </div>
                <div id="wind">
                    {weather.wind.speed}km/h
                </div>
           
            </div>
}
        </div>
    )

}
