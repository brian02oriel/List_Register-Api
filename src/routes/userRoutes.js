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

    app.put('/users/:id', (req, res) =>{
        const userData = {
            id: req.params.id,
            email: req.body.email,
            password: req.body.password,
            created_at: null,
            updated_at: null
        };

        User.updateUser(userData, (err, data) =>{
            if(data && data.msg){
                res.json({
                    success: true,
                    msg: 'User updated',
                    data: data   
                })
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Error: Cannot update user'

                })
            }
        })
    })

    app.delete('/users/:id', (req, res) =>{
        userData = req.params.id;
        User.deleteUser(userData, (err, data) =>{
            
            if(data && data.msg){
                res.json({
                    success: true,
                    msg: 'User deleted',
                    data: data   
                })
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Error: Cannot delete user'

                })
            }
        })
    })
}


