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

userModel.deleteUser = (userId, callback) => {
    if(connection){
        let query = "SELECT * FROM users WHERE id = " + connection.escape(userId) + " ;"
        connection.query(query, (err, row) =>{
            if(row.length !== 0){
                let query = "DELETE FROM users WHERE id = " + connection.escape(userId) + " ;"
                connection.query(query, (err, row) =>{
                    if(err){
                        console.log(err);
                    } else {
                        callback(null, {
                            "msg": "success"
                        });
                    }
                }) 
            } else{
                callback(null, {
                    "msg": "This user dont exist"
                })
            }
       
        
         
        });
    }
}
module.exports = userModel;

        
       

