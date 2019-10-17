
const models = require('../models')
const EpisodeDetail = models.episode_details

exports.detail = (req, res) => {
    EpisodeDetail.findAll({
        where:{
            episode_id:req.params.episode_id,
            webtoon_id:req.params.webtoon_id
        }
    }).then(det_episodes=>{
        res.send({det_episodes})
    })
}

exports.getDetailEpisode = (req, res) => {
    EpisodeDetail.findAll({
        where:{
            episode_id:req.params.episode_id,
            webtoon_id:req.params.webtoon_id
        }
    }).then(det_episodes=>{
        res.send({det_episodes})
    })
}