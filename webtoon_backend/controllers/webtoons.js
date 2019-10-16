const models = require('../models')
const User = models.users
const Webtoon = models.webtoons


exports.index= (req, res)=>{
    Webtoon.findAll({
        include:[{
            model:User,
            as:'UserData',
            attributes:['username']
        }]
    }).then(webtoons=>res.send(webtoons))
}

exports.favourite = (req, res)=>{
    Webtoon.findAll({
        where:{
            isFavourite:req.params.favourite
        }
    }).then(webtoons=>{
        res.send(webtoons)
    })
}

exports.title = (req, res) =>{
    Webtoon.findAll({
        where:{
            title:req.params.title
        }
    }).then(webtoons=>{
        res.send(webtoons)
    })
}