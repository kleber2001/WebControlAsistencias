//GET HOME 

exports.homepage = async(req, res)=>{

        const locals = {
            title : 'Asistencia',
            description : 'Control de asistencia del LST'
        }
    res.render('index', locals);
}