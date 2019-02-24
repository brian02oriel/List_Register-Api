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

userModel.updateUser = (userData, callback) => {
    if(connection){
        const query = "UPDATE users SET email = " +
         connection.escape(userData.email) +
         " , password = " + connection.escape(userData.password) + 
         " WHERE id = " + connection.escape(userData.id) + " ;"
        
         connection.query(query, (err, rows) =>{
            if(err){
                console.log(err);
            } else {
                callback(null, {
                    "msg": "success"
                });
            }
        });
    }
}

userModel.deleteUser = (userData, callback) => {
    if(connection){
        const query = "DELETE FROM users WHERE id = " + connection.escape(userData) + " ;"
        
         connection.query(query, (err, rows) =>{
            if(err){
                console.log(err);
            } else {
                callback(null, {
                    "msg": "success"
                });
            }
        });
    }
}
module.exports = userModel;

        
       

