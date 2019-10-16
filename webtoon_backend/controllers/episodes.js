const models = require('../models')
const Episode = models.episodes
const EpisodeDetail = models.episode_details

exports.index=(req, res)=>{
    Episode.findAll({
        where:{
            webtoon_id:req.params.id
        }
    }).then(episodes=>{
        res.send(episodes)
    })
}

exports.detail = (req, res) => {
    EpisodeDetail.findAll({
        where:{
            episode_id:req.params.episode_id,
            webtoon_id:req.params.webtoon_id
        }
    }).then(episodes=>{
        res.send(episodes)
    })
}