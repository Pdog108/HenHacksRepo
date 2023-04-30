// Importing express module
const express=require("express")
const router=express.Router()
const http = require('http');
const fs = require('fs');

// Handling request using router
router.get("/",(req,res,next)=>{
    // res.send("This is the homepage request")
    fs.readFile('docs/contact.html', (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Internal Server Error');
          return;
        }
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      });
})
module.exports=router