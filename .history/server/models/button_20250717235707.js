const mongoose =require('mongoose')

const buttonSchema=new mongoose.Schema({
    name:{
        type:String,required:true
    }
})
const Button=new mongoose.model('Button',buttonSchema)

module.exports=Button;