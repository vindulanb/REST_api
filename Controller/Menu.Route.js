var express = require('express');
var router = express.Router();
var Controller = require('./MenuController');

//add drugs to db
router.post('/', function (req, res) {
        // var drug = new Drug(req.body);
        // drug.save();
        // res.send({
        //     type:'POST',
        //     name:req.body.name,
        //     drug_type:req.body.drug_type,
        //     unit_price:req.body.unit_price,
        //     available:req.body.available
        // });
        //this thing also does:
        //console.log(req.body);
        Controller.insertMenu(req.body).then(function (data) {
            res.status(data.status).send({ message: data.message });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
});

//get full list of drugs from db
router.get('/', function (req, res) {
        Controller.getAll().then(function (data) {
            res.status(data.status).send({ data: data.menudata });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error!" });
        })
});
router.get('/dummyData', function (req, res) {
        Controller.dummyData().then(function (data) {
            res.status(data.status).send({ data: data.menudata });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error!" });
        })
});

//get selected list of drugs from db by name
router.get('/:id', function (req, res) {
        Controller.getMenu(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.menuSearch });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
});

//update drugs in db
router.put('/:id', function (req, res) {
        Controller.updateMenu(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.menuUpdated });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
});

//delete drugs from db
router.delete('/:id', function (req, res) {
        Controller.deleteMenu(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.message });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
});
module.exports = router;