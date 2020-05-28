import axios from "axios";

export default class WeatherService
{
    _apiKey = '&appid=eb5da925dfba7951f43890e9d8924d5b';
    _apiBase = 'http://api.openweathermap.org/data/2.5/forecast?q=';

    async getWeather(city) 
    {
      try{
        const response = await axios.get(`${this._apiBase}${city}&units=metric${this._apiKey}`);
        
        return Promise.resolve(response.data);
    }
      catch(err)
      {
          console.log(err);
          return Promise.reject(err);
      }
    }
} 