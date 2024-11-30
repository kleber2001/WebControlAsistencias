const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    matricula: {
        type: String,
        require: true,
        unique: true
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
        require: true
    },
    role: {
        type: String,
        require: true
    },
    createAt:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Customer',CustomerSchema)