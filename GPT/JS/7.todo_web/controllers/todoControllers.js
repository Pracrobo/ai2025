const db = require('../models/database')


function getAllTodos(req, res){
    try {
        const rows = db.prepare('SELECT * FROM todos').all()
        res.status(201).json ({ message : "ok", value: rows})
    }catch(err) {
        res.status(500).json({ message: "fail"})
    }
}


function addTodos(req,res) {
    const text = req.body.value;
    try {
        const stmt = db.prepare("INSERT INTO todos(text) VALUES (?)");
        const info = stmt.run(text);
        res.status(201).json({ message: "ok", userId: info.lastInsertRowid, text: text});
    }catch(error){
        res.status(500).json({ message: "fail", id: info.lastInsertRowid });
    }
}

function toggleTodo(req, res) {

}


function deleteTodo(req, res) {

}


module.exports = {
    getAllTodos,
    addTodos,
    toggleTodo,
    deleteTodo
};