const connection = require('./connection');

let productModel = {};

productModel.getProducts = (callback) =>{
    if(connection){
        connection.query('SELECT * FROM products ORDER BY id', 
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

productModel.insertProduct = (productData, callback) =>{
    if(connection){
        connection.query('INSERT INTO products SET ?', productData,
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

productModel.deleteProduct = (productData, callback) => {
    if(connection){
        const query = "DELETE FROM products WHERE id = " + connection.escape(productData) + " ;"
        
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


module.exports = productModel;