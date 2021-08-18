'use strict'
const express = require('express');
require('dotenv').config();
const cors = require('cors')

const weatherData = require('./data/weather.json')


const server = express();
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`listining ${PORT}`)
    
})
server.use(cors());

server.use(cors());


class Forecast{
    constructor(item){
        this.date=item.valid_date;
        this.description = item.weather.description;
    }
}

//http://localhost:3001/weather?lat=aaaa&lon=aaaa&searchQuery=Amman
server.get('/weather', (req, res) => {
    let searchQuery = req.query.searchQuery;
    console.log(searchQuery)

let selectCityInf=weatherData.find((item)=>{
    if(item.city_name.toLowerCase()===searchQuery.toLowerCase()){
        console.log('exsist')
        console.log(item)

        return item;
    }
})

let ForecastArr=selectCityInf.data.map((item)=>{
    console.log(item)

    return new Forecast(item);
})
res.send(ForecastArr)
})

server.get('*',notFoundHandler)
function notFoundHandler(req, res) {
    res.status(404,404,500).send({
        "error": "Unable to get the route"
    })
}
