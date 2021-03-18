const db = require("./db");

function getUsers(req, res) {
    
    let sql = `SELECT * FROM users`;

    db.all(sql, function (err, data) {
        if(err) throw err
        
        res.json({
            status : 200,
            data,
            message : "Successfully fetched Users"
        })
    })
}

function getUser(req, res) {

    let sql = `SELECT * FROM users WHERE id='${req.body.id}'`;

    db.all(sql, function (err, data) {
        if(err) throw err
        
        res.json({
            status : 200,
            data,
            message : "User record retrieved"
        })
    })
    
}

function createUser(req, res) {
    
    let sql = `INSERT INTO users(email, name) VALUES ('${req.body.email}', '${req.body.name}')`;

    db.run(sql, function (err) {
        if(err) throw err
        
        res.json({
            status : 200,
            message : "User successfully created"
        })
    })
}

module.exports = {
    getUsers,
    getUser,
    createUser
}