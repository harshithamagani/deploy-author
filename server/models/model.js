const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
//

const authorSchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true, "Name of the author cannot be empty!!" ],
        minlength: [2, "Name of the author should be more than 2 charecters!"]
    }
},{timestamps:true})

const Author = mongoose.model('Author', authorSchema);