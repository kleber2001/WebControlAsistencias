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
        description : 'Ingreso de nuebo usuario'
    }
res.render('customer/add', locals);
}
