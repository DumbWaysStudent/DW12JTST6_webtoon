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

exports.update = (req, res) => {
    Episode.update(
        req.body,
        {where:{
            webtoon_id:req.params.webtoon_id,
            id:req.params.episode_id
        }}
    ).then(episode=>{
        res.send({
            message:'Success updated episode',
            episode
        })
    })
}

