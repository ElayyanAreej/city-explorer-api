const axios = require('axios'); 
const weatherData = require('../data/weather.json');


class Forecast {
    constructor(item) {
      this.date = item.valid_date;
      this.description = item.weather.description;
    }
  }

  
function weatherHandler(req, res) {
  let searchQuery = req.query.searchQuery;
  console.log(searchQuery);

  let selectCityInf = weatherData.find((item) => {
    if (item.city_name.toLowerCase() === searchQuery.toLowerCase()) {
      return item;
    }
  });

  let ForecastArr = selectCityInf.data.map((item) => {
    return new Forecast(item);
  });
  res.send(ForecastArr);
}

module.exports = weatherHandler; 

 
  