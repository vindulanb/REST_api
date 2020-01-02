var mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        required : [true]
    },
    user_name : {
        type : String
    },
    password :{
        type: String
    },
    loyality_points: {
       type: Number 
    },
    phone_no :{
        type: String
    }
});

const drugSchema = new Schema({
    name : {
        type : String,
        required : [true]
    },
    drug_type : {
        type : String
    },
    unit_price :{
        type:Number
    },
    loyalPoints :{
        type:Number
    },
    available: {
        type : Boolean,
        default : false
    }
});

const paymentSchema = new Schema({
    user_email : {
        type : String,
        required : [true]
    },
    payment_method : {
        type : String
    },
    holder_name :{
        type:String
    } ,
    amount_paid :{
        type:Number
    } ,
    phone_no :{
        type:String
    } 
});

mongoose.model('drugSchema',drugSchema);
mongoose.model('userSchema',userSchema);
mongoose.model('paymentSchema',paymentSchema);
mongoose.connect('mongodb://127.0.0.1:27017/pharmacy',function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to MongoDB');
});
module.exports = mongoose;