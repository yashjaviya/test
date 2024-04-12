const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const router = express.Router();
const axios = require('axios');

const userCtrl = require('./public/script/userController');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const port = process.env.port || 3000;

app.get('/', (req, res) => {
    // res.send('test');
    res.sendFile(__dirname + '/public/main.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.get('/registerPage', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
})

app.get('/getAllUser', userCtrl.getAllUser);
app.post('/userLogin', userCtrl.login);
app.post('/userRegister', userCtrl.register);

app.listen(port, () => {
    console.log('server are running port number:', port);
});

module.exports = router;