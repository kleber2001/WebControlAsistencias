const User = require('../models/Customer');
const mongoose = require('mongoose');

//GET HOME 

exports.homepage = async(req, res)=>{

        const locals = {
            title : 'Asistencia',
            description : 'Control de asistencia del LST'
        }
    res.render('index', locals);
}

// GET NEW USER

exports.addCustomer = async(req, res)=>{

    const locals = {
        title : 'Nuevo registro',
        description : 'Ingreso de nuevo usuario'
    }
    res.render('customer/add', locals);
}

// GET ADD USER

exports.postCustomer = async(req, res)=>{
    
    console.log(req.body);

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        matricula: req.body.matricula,
        lector: req.body.lector,
        materia: req.body.materia,
        paralelo: req.body.paralelo,
        role: req.body.role

    });

    try {

        await User.create(newUser);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }

}
