var mongoose=require('../DBSchema/MenuDB');
var DrugSchema = mongoose.model('drugSchema');
var DummyFile = require('./DummyMenu');

var Controller=function () {
    this.insertMenu=function (data) {
        return new Promise(function (resolve,reject) {
            var Drug=new DrugSchema({
                name: data.name,
                drug_type: data.drug_type,
                unit_price: data.unit_price,
                available: data.available
            });
            Drug.save().then(function () {
                resolve({status:200,message:"Inserte successful !"});
            }).catch(function (err) {
                reject({status:500,message:"Error: "+err});
            })
        });
    }
    this.getAll=function () {
        return new Promise(function (resolve,reject) {
            DrugSchema.find().exec().then(function (data) {
                resolve({status:200,menudata:data});
            }).catch(function (err) {
                reject({status:404,message:"Data not available"});
            })
        })
    }

    this.dummyData=function () {
        return new Promise(function (resolve,reject) {
            DrugSchema.find().exec().then(function (data) {
                resolve({status:200,menudata:DummyFile});
            }).catch(function (err) {
                reject({status:404,message:"Data not available"});
            })
        })
    }

    this.getMenu=function(name){
        return new Promise(function (resolve,reject) {
            DrugSchema.find({name:name}).exec().then(function (data) {
                resolve({status:200,menuSearch:data});
            }).catch(function (err) {
                reject({status:404,message:"ID not found !"});
            })
        })
    }
    this.updateMenu=function (id) {
        return new Promise(function (resolve,reject) {
            DrugSchema.update({id:id}).then(function (data) {
                resolve({status:200,menuUpdated:data});
            }).catch(function (err) {
                reject({status:404,message:"ID not found !"});
            })
        })
    }
    this.deleteMenu=function (id) {
        return new Promise(function (resolve,reject) {
            DrugSchema.remove({id:id}).then(function (data) {
                resolve({status:200,message:"Successfully Deleted !"});
            }).catch(function (err) {
                reject({status:404,message:"ID not found !"});
            })
        })
    }
};
module.exports = new Controller();