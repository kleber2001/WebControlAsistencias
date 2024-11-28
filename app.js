require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

//Plantillas
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

//Home
app.get('/',(req,res) =>{
    
    const locals = {
        title: 'Asistencia',
        description: 'Control de asistencia en LST'
    }
    res.render('index',locals)
});

app.listen(port, ()=>{
    console.log('App listening in port:',port)
});