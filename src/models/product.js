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

module.exports = productModel;