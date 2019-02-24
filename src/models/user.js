const connection = require('./connection');

let userModel = {};

userModel.getUsers = (callback) =>{
    if(connection){
        connection.query('SELECT * FROM users ORDER BY id', 
        (err, rows) => {
            if(err){
                console.log(err);
            } else {
                callback(null, rows);
                }
            }
        )
    }
};

userModel.insertUser = (userData, callback) => {
    if(connection){
        connection.query('INSERT INTO users SET ?', userData,
        (err, rows) =>{
            if(err){
                console.log(err);
            } else {
                callback(null, {
                    'insertId': rows.insertId
                })
            }
            
        })
    }
}
module.exports = userModel;

        
       

