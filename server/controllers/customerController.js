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
    const locals = {
        title : 'Nuevo registro añadido',
        description : 'Ingreso de nuevo usuario'
    }
    res.render('customer/add', locals);
}
