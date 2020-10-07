const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
    return res.json(req.body);
});

routes.get('/users', (req, res) => {
    return res.json({ idade: req.query.idade });
});

routes.put('/users/:id', (req, res) => {
    return res.json({ id: req.params.id });
});

module.exports = routes;
