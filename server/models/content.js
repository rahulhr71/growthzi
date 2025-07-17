const mongoose =require('mongoose')

const contentSchema=new mongoose.Schema({
    name:{
        type:String,required:true
    }
})
const Content=new mongoose.model('Content',contentSchema)

module.exports=Content;