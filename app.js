const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const todosRoutes = require('./routes/todos');
const usersRoutes = require('./routes/users');
/*mongoose.connect('mongodb+srv://todoAppYoutube:todoAppYoutube@cluster0.soul7.mongodb.net/todoApp', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connecté à la base de données.');
});*/
mongoose.connect('mongodb://127.0.0.1/todoApp', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, (error, db) => {
if(error) return (error);
console.log('Connecté à la base de données !');
});

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json({}));

app.use(methodOverride('_method'));

app.use('/todos', todosRoutes);

app.use('/users', usersRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}.`));