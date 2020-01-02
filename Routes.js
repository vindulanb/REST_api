const express=require('express');
var Routes=express.Router();
var CustRoute=require('./Controller/Cust.Route');
var MenuRoute=require('./Controller/Menu.Route');

// Routes.use('/drug/',DrugRoute);
Routes.use('/customer/',CustRoute);
Routes.use('/menu/',MenuRoute);
module.exports = Routes;