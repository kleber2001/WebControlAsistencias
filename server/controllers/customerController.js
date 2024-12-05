const User = require('../models/Customer');
const mongoose = require('mongoose');

// GET HOME 
exports.homepage = async (req, res) => {
    const locals = {
        title: 'Asistencia',
        description: 'Control de asistencia del LST'
    };
    res.render('index', locals);
};

// GET NEW USER
exports.addCustomer = async (req, res) => {
    const locals = {
        title: 'Nuevo registro',
        description: 'Ingreso de nuevo usuario',
        message: req.query.message || null,  
        messageType: req.query.messageType || 'info'  
    };
    res.render('customer/add', locals);
};

// POST ADD USER
exports.postCustomer = async (req, res) => {
    const ident = req.body.identificacion;

    try {
        const existUser = await User.findOne({ identificacion: ident });

        if (existUser) {
            return res.render('customer/add', {
                title: 'Nuevo registro',
                description: 'Ingreso de nuevo usuario',
                message: 'Error: Este usuario ya se encuentra registrado.',
                messageType: 'danger'
            });
        }

        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            identificacion: req.body.identificacion,
            lector: req.body.lector,
            materia: req.body.materia,
            paralelo: req.body.paralelo,
            role: req.body.role
        });

        await newUser.save();

        // Si todo es correcto, mostramos el mensaje de éxito
        return res.render('customer/add', {
            title: 'Nuevo registro',
            description: 'Ingreso de nuevo usuario',
            message: 'Registro exitoso!',
            messageType: 'success'
        });

    } catch (error) {
        console.log(error);
    }
};
