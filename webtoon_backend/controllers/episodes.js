const models = require('../models')
const Episode = models.episodes

exports.index=(req, res)=>{
    Episode.findAll({
        where:{
            webtoon_id:req.params.id
        }
    }).then(episodes=>{
        res.send(episodes)
    })
}

exports.getMyEpisode= (req, res) => {
    Episode.findAll({
        where:{
            created_by:req.params.user_id,
            webtoon_id:req.params.webtoon_id
        }
    }).then(episodes=>{
        res.send({
            episodes
        })
    })
}

exports.createMyEpisode = (req, res) => {
    Episode.create(
        req.body
        ).then(episodes => {
            res.send({
                message: 'Success created episode',
                episodes
            })
        })
    
}

