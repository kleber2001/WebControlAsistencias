require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db')

const app = express();
const port = 5000 || process.env.PORT;

//Connect DB

connectDB();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

//Plantillas
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

//routes home
app.use('/', require('./server/routes/customer'));

//error 404

app.get('/*',(req,res)=>{
    res.status(404).render('404')
})

app.listen(port, ()=>{
    console.log('App listening in port:',port)
});