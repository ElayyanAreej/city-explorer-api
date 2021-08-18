'use strict'
const express = require('express');
require('dotenv').config();
const cors = require('cors')
const axios=require('axios');
const weatherData = require('./data/weather.json')


const server = express();
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`listining ${PORT}`)
    
})


server.use(cors());


class Forecast{
    constructor(item){
        this.date=item.valid_date;
        this.description = item.weather.description;
    }
}

class Dailyweather{
    constructor(item){
        this.date=item.valid_date;
        this.description = item.weather.description;
    }
}

http://localhost:3001/weather?lat=aaaa&lon=aaaa&searchQuery=Amman
server.get('/weather', (req, res) => {
    let searchQuery = req.query.searchQuery;
    console.log(searchQuery)

let selectCityInf=weatherData.find((item)=>{
    if(item.city_name===searchQuery){
        return item;
    }
})

let ForecastArr=selectCityInf.data.map((item)=>{
    return new Forecast(item);
})
res.send(ForecastArr)
})


//https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY
server.get('/dailyweather',dailyweatherHandler);

function dailyweatherHandler(req,res){
    let city = req.query.city;
    let dailyweatherURL=`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${process.env.WEATHERKEY}`
    axios.get(dailyweatherURL).then(wetherdata=>{
        console.log(wetherdata.data.data);
        let DailyweatherArr=wetherdata.data.data.map((item)=>{
            return new Dailyweather(item);
        });
        res.send(DailyweatherArr);

    }).catch(error=>{
        console.log('error on getting weather data'+error);
    });
}


//Route *
// server.get('*',notFoundHandler);
// function notFoundHandler(req, res) {
//     res.status(404,404,500).send({
//         "error": "Unable to get the route"
//     })
// }
