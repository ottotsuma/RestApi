const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
       type: String,
        required: true
    },

    Description: {
       type: String,
        required: true
    },
    date: {
        type: Date,
        defualt: Date.now 
     },
    
})

module.exports = mongoose.model('Posts', PostSchema);