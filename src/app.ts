import express from 'express';
const app = express();
const port = 3000;

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';

// Importing all the routes
const indexroute=require("../docs/index.js")
const aboutusroute=require("../docs/aboutus.js")

// Handling routes request
app.use("/",indexroute)
app.use("/aboutus.html",aboutusroute)
app.listen((3000),()=>{
    console.log("Server is Running")
})