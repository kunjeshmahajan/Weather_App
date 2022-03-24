import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {useState, useEffect} from 'react'
import axios from "axios";
function App() {

  const apiKey = "e2b7b9a70043643f8114e0040ee7f651"
  const [data, setdata] = useState({});
  const [city,setCity] = useState()

  const getWeatherDetails = (cityName) =>{
    if(!cityName) return
    const apiUrl= "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=" + apiKey 
    axios.get(apiUrl).then((res)=>{
      
      setdata(res.data)

    }).catch((err)=>{
      console.log(err)
    })
  }


 const handleSearch=()=>{
  getWeatherDetails(city)
 }

 const handleCityInput = (e) =>{
   console.log(e.target.value)
   setCity(e.target.value)
 }

  

  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className='form-control' value={city}  onChange={handleCityInput} />
        <button className='btn btn-primary' type='button'onClick={handleSearch}>Search</button>
        </div>
</div>

{Object.keys(data).length>0 &&
      
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded wetherResultBox">
          <img className='weatherIcon' src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt=""/>

          <h5 className="weathercity">
            {data?.name}
          </h5>
          
          <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
        </div>
      </div>
}
    </div>

  );
}

export default App;
