

import axios from "axios";

const API_KEY="7da31af4b5a0db0e531d4f8356009242";
const URL="https://api.openweathermap.org/data/2.5/weather";


const FeatchWeather=async (query)=>{
  let {data} = await axios.get(URL,{
    params:{
        q:query, //city name
        units : "metric",
        APPID:API_KEY
    }
  })
  return data;

}
export default FeatchWeather;