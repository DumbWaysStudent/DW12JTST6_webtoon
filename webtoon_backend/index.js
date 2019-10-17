const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()

const port = 5000

app.use(bodyParser.json())

// Controllers
const WebtoonsController = require('./controllers/webtoons')
const EpisodesController = require('./controllers/episodes')
const DetalEpisodeController = require('./controllers/episode_detail')
const AuthController = require('./controllers/auth')

// Middleware
const { authenticated } = require('./middleware')


app.group('/api/v1', (router)=>{

    // 13
    router.post('/login', AuthController.login)

    // GET 
    // 15
    router.get('/webtoons',WebtoonsController.index)
    // 16
    router.get('/webtoons/:id/episodes',EpisodesController.index)
    // 17
    router.get('/webtoons/:webtoon_id/episodes/:episode_id',DetalEpisodeController.detail)
    // 18
    router.get('/webtoons/favourites/:favourite', authenticated, WebtoonsController.favourite)
    // 19
    router.get('/webtoons/title/:title',WebtoonsController.title)
    // 20
    router.get('/user/:user_id/webtoons', authenticated, WebtoonsController.myWebtoonCreation)
    //21
    router.get('/user/:user_id/webtoon/:webtoon_id/episodes', authenticated, EpisodesController.getMyEpisode)
    router.post('/user/:id/webtoon',authenticated, WebtoonsController.store)

    // 23
    router.delete('/user/:user_id/webtoon/:webtoon_id', authenticated, WebtoonsController.deleteMyWebtoonCreation)
    //24
    router.post('/user/webtoon/:webtoon_id/episode',authenticated, EpisodesController.createMyEpisode)
    router.get('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/images',authenticated, DetalEpisodeController.getDetailEpisode)
    




    // belum push 
    

    
    // PUT 22
    // router.put('/user/:user_id/webtoon/:webtoon_id',authenticated, WebtoonsController.update)

    

}),


app.listen(port, () => console.log(`Listening on port ${port}`))