'use strict'
const express=require('express');
require('dotenv').config();
const cors = require('cors')

const server = express();
const PORT=process.env.PORT;
server.listen(PORT,()=>{
    console.log(`listining ${PORT}`)
})