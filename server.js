'use strict'
const express = require('express');
require('dotenv').config();
const cors = require('cors')

const weatherData = require('./data/weather.json')


const server = express();
const PORT = process.env.REACT_APP_PORT;
server.listen(PORT, () => {
    console.log(`listining ${PORT}`)

})

server.get('/weather', (req, res) => {
    let searchQuery = req.query.searchQuery;

    // weatherData.forEach((item,ind)=>{
    //     res.send(item[2].city_name)
       
    // let description = weatherData.find(city => {
    //         if (city[2].city_name === searchQuery) {
    //             res.send(city[3].city_name)
    //             return true;
    //         }
    //         return weatherData;
    //     })
    // // })


    if(searchQuery.toLowerCase()==='amman'||searchQuery.toLowerCase()==='seattle'||searchQuery.toLowerCase()==='paris'){
        let arr=[ {
            "description": "Low of 17.1, high of 23.6 with broken clouds",
            "date": "2021-03-31"
          },
          {
            "description": "Low of 17.5, high of 29.9 with few clouds",
            "date": "2021-04-01"
          }]
        res.send(arr)
      
    }
    else{
        res.send('error')
    }



    })
