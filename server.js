const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

require('./hbs/helpers')

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers

app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'Armin'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/test', (req, res) => {
    //res.send('Hola mundo');
    let salida = {
        nombre: "armin",
        edad: 32,
        url: req.url
    };
    res.send(salida);
});

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
})