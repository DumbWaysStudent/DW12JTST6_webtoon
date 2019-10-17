
const models = require('../models')
const EpisodeDetail = models.episode_details

exports.read = (req, res) => {
    EpisodeDetail.findAll({
        where:{
            episode_id:req.params.episode_id,
            webtoon_id:req.params.webtoon_id
        }
    }).then(det_episodes=>{
        res.send({det_episodes})
    })
}

exports.store = (req, res) => {
    EpisodeDetail.create(req.body).then(episode_details=>{
        res.send({
            message:'Success added Image',
            episode_details
        })
    })
}

exports.remove= (req, res) => {
    EpisodeDetail.destroy({where:{
        id:req.params.id,
        episode_id:req.params.episode_id,
        webtoon_id:req.params.webtoon_id,
        
    }}).then(episode_details=>{
        res.send({
            message:'Success delete image',
            episode_details
        })
    })
}