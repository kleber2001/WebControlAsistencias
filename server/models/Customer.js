const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const now = new Date();
const offset = -5;
const localDate = new Date(now.getTime()+offset*60*60*1000);

const CustomerSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    identificacion: {
        type: String,
        require: true
    },
    lector: {
        type: String,
        require: true
    },
    materia: {
        type: String,
        require: true
    },
    paralelo: {
        type: String,
        require: false
    },
    role: {
        type: String,
        require: true
    },
    createAt:{
        type: Date,
        default: localDate.toISOString()
    }
});

module.exports = mongoose.model('Customer',CustomerSchema)