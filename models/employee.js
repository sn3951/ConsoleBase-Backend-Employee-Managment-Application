const mongoose=require("mongoose")
const employeeSchema=new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:true,
            maxLength:100,
        },

        age:{
            type:Number,
            required:true,
            min:0,
        },

        dob:{
            type:Date,
            required:true,
        },
        
        salary:{
            type:Number,
            required:true,
            min:0,
        },

        department:{
            type:String,
            required:true,
            maxLength:50,
        }

    }
);
module.exports = mongoose.model("Employee", employeeSchema);   