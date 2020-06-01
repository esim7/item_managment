import axios from "axios";

export default class WeatherService
{
    _apiKey = '&appid=eb5da925dfba7951f43890e9d8924d5b';
    _apiBase = 'http://api.openweathermap.org/data/2.5/forecast?q=';

    async getWeather(city) 
    {
      try{
        const response = await axios.get(`${this._apiBase}${city}&units=metric${this._apiKey}`);
        console.log(response);
        return Promise.resolve(response.data);
    }
      catch(err)
      {
          console.log(err);
          return Promise.reject(err);
      }
    }

    serializeData(data)
    {
        var {country, name} = data.city;
        var {dt_txt, main:{temp, humidity}, wind:{speed}} = data.list[0];
        var {icon} = data.list[0].weather[0];

        temp = Math.round(temp);
        speed = Math.round(speed);
        dt_txt = dt_txt.split(' ')[0];

        var obj = {country, name, dt_txt, temp, humidity, speed, imagePath: `http://openweathermap.org/img/w/${icon}.png`};
        return obj;
    }

    async init(selectedCity)
    {
        const response = await this.getWeather(selectedCity);
        var serialisedData = this.serializeData(response);
        return serialisedData;
    }
} 