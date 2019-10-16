const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.users

exports.login = (req, res) => {
    const { email, password } = req.body

    User.findOne({where:{email, password}}).then(user=>{
        if(user){
            const token = jwt.sign({ userId: user.id}, 'my-secret-key')
            res.send({
                response:{
                    username:user.username,
                    email:user.email,
                    token: token
                }
            })
        }else{
            res.send({
                error: true,
                message:"wrong email or password!"
            })
        }
    })
}
