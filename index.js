const express = require('express');
const app = express();
const port = 3333;

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req,res) => {
    console.log('request is', req.query);
    const { firstName, lastName } = req.query;
    res.send(`Hello ${firstName} ${lastName}`).end();
});

app.get('/cats', (req, res) => {
    res.send(`Meow`).end();
});

app.get('/dogs', (req, res) => {
    res.send(`Woof`).end();
});

app.get('/cats_and_dogs', (req, res) => {
    res.send(`Living together`).end();
});

app.get('/greet/:name?', (req,res) => {
    const user = req.params.name
    res.send(`Hello, ` + user + `!`).end();
});

app.get('/year', (req, res) => {
    let {age} = req.query;
    age = 2019 - age;
    res.send(`You were born in ${age}`).end();
});