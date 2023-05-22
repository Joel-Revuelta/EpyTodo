const todosQuery = require('./todos.query');
const dotenv = require('dotenv');
const connection = require('../../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

module.exports = (app, jwt, secret) => {
    app.post('/todos', (req, res) => {
        console.log(req.body);
        if (!(req.body.title && req.body.description && req.body.due_time && req.body.user_id && req.body.status)) {
            res
            .status(400)
            .json({ msg: "Bad parameter" })
            return;
        }
        todosQuery.createTodo(res, req.body)
    });

    app.get('/todos', (req, res) => {
        let decode = jwt.verify(req.headers.authorization.split(' ')[1], secret);
        todosQuery.getTodoByUserId(res, decode.email)
    });

    app.delete('/todos/:id', (req, res) => {
        jwt.verify(req.headers.authorization.split(' ')[1], secret);
        todosQuery.deleteTodo(res, req.params.id)
    });

    app.get('/todos/:id', (req, res) => {
        jwt.verify(req.headers.authorization.split(' ')[1], secret);
        todosQuery.getTodoById(res, req.params.id)
    });

    app.put('/todos/:id', (req, res) => {
        jwt.verify(req.headers.authorization.split(' ')[1], secret);
        if (!(req.body.title && req.body.description && req.body.user_id && req.body.status)) {
            res
            .status(400)
            .json({ msg: "Bad parameter" })
            return;
        }
        todosQuery.updateTodo(res, req.params.id, req.body);
    });
}
