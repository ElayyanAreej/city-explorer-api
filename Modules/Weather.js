const axios = require('axios'); 
const weatherData = require('../data/weather.json');

  
function dailyweatherHandler(req, res) {
    let city = req.query.city;
    let dailyweatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${process.env.WEATHERKEY}`;
    axios
    .get(dailyweatherURL)
    .then((wetherdata) => {
        console.log(wetherdata.data.data);
        let DailyweatherArr = wetherdata.data.data.map((item) => {
            return new Dailyweather(item);
        });
        res.send(DailyweatherArr);
    })
    .catch((error) => {
        console.log("error on getting weather data" + error);
    });
}

class Dailyweather {
    constructor(item) {
      this.date = item.valid_date;
      this.description = item.weather.description;
    }
  }

module.exports=dailyweatherHandler;