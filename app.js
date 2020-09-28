const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

mongoose.connect('mongodb+srv://todoAppYoutube:todoAppYoutube@cluster0.soul7.mongodb.net/todoApp', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connecté à la base de données.');
});

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.set('view engine', 'pug');

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}.`));