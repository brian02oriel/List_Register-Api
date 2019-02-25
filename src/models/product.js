const connection = require('./connection');

let productModel = {};

productModel.getProducts = (userId, callback) =>{
    if(connection){
        let query = "SELECT products.id, productname, exp_date FROM products " + 
        "INNER JOIN users on userId = users.id " +
         "WHERE userId = "+ connection.escape(userId) + " ORDER BY products.id"
        connection.query( query, 
        (err, rows) => {
            if(err){
                console.log(err);
            } else {
                callback(null, {
                    msg:"success",
                    data: rows
                });
                }
            }
        )
    }
};

productModel.insertProduct = (productData, callback) =>{
    if(connection){
        connection.query('INSERT INTO products SET ?', productData,
        (err, rows) =>{
            if(err){
                console.log(err);
            } else {
                callback(null, {
                    'insertId': rows.insertId
                });
            }
            
        })
    }
}

productModel.updateProduct = (productData, callback) => {
    if(connection){
        const query = "UPDATE products SET productname = " +
         connection.escape(productData.productname) +
         " , exp_date = " + connection.escape(productData.exp_date) + 
         " WHERE id = " + connection.escape(productData.id) + " ;"
        
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

productModel.deleteProduct = (productId, callback) => {
    if(connection){
        let query = "SELECT * FROM products WHERE id = " + connection.escape(productId) + " ;"
        connection.query(query, (err, row) =>{
            if(row.length !== 0){
                let query = "DELETE FROM products WHERE id = " + connection.escape(productId) + " ;"
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
                    "msg": "This product dont exist"
                })
            }
       
        
         
        });
    }
}


module.exports = productModel;