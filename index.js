const express=require('express');
const cors=require('cors');
const BodyParser=require('body-parser');
const Routes=require('./Routes');
const mongoose = require('mongoose');

//set up express app
const app=express();

app.use(BodyParser.json());
app.use(cors());
app.use('/',Routes);

//listen for request
app.listen(4000,'localhost',function(err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('[+]Listing for requests..');
});
