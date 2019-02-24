const Product = require('../models/product');

module.exports = function (app) {

    app.get('/products', (req, res) =>{
        Product.getProducts((err, data) => {
            res.json(data);
        });
    });


    app.post('/products', (req, res) =>{
        const productData = {
            id: null,
            productname: req.body.productname,
            exp_date: req.body.exp_date,
            created_at: null,
            updated_at: null
        };

        Product.insertProduct(productData, (err, data) =>{
            if(data && data.insertId){
                res.json({
                    success: true,
                    msg: 'Product inserted',
                    data: data   
                })
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Error: Cannot insert product'

                })
            }
        })
    })

    app.put('/products/:id', (req, res) =>{
        const productData = {
            id: req.params.id,
            productname: req.body.productname,
            exp_date: req.body.exp_date,
            created_at: null,
            updated_at: null
        };

        Product.updateProduct(productData, (err, data) =>{
            if(data && data.msg){
                res.json({
                    success: true,
                    msg: 'Product updated',
                    data: data   
                })
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Error: Cannot update product'

                })
            }
        });
    })

    app.delete('/products/:id', (req, res) =>{
        productData = req.params.id;
        Product.deleteProduct(productData, (err, data) =>{
            
            if(data && data.msg){
                res.json({
                    success: true,
                    msg: 'Product deleted',
                    data: data   
                })
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Error: Cannot delete product'

                })
            }
        })
    })

        
}
