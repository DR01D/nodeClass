"use strict";

const express = require('express');
const app = express();

const courses = [
    { id: 1, name: 'Course One'},
    { id: 2, name: 'Course Two'},
    { id: 3, name: 'Course Three'}
];

app.get('/', (req, res, next) => {
    res.send('hello world');
});

app.get('/api/courses', (req, res, next) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res, next) => {
    const checkResult = courses.find(value => value.id === parseInt(req.params.id));
    if (!checkResult) {
        res.status(404).send(`The course with the id ${parseInt(req.params.id)} was not found.`);
    } else {
        res.send(checkResult);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});