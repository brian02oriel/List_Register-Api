const User = require('../models/user');

module.exports = function (app) {
    app.get('/', (req, res)=>{
        res.json([]);
    });

    app.get('/users', (req, res) =>{
        User.getUsers((err, data) => {
            res.json(data);
        });
    });

    app.post('/users', (req, res) =>{
        const userData = {
            id: null,
            email: req.body.email,
            password: req.body.password,
            created_at: null,
            updated_at: null
        };
        
        User.insertUser(userData, (err, data) =>{
            if(data && data.insertId){
                res.json({
                    success: true,
                    msg: 'User inserted',
                    data: data   
                })
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Error: Cannot insert user'

                })
            }
        })
    })

}


