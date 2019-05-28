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
