const mongoose = require('mongoose'); 

const jobSchema = mongoose.Schema({
    title : {
        type : String, 
        require : true
    }, 
    content : String,
    date : {
        type : Date, 
        default : Date.now
    },
    completed : {
        type : Boolean, 
        default : false
    } 
}); 

module.exports= mongoose.model('toDoList', jobSchema); 