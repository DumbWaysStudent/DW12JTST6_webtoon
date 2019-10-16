const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()

const port = 5000

app.use(bodyParser.json())

// Controllers
const WebtoonsController = require('./controllers/webtoons')
const EpisodesController = require('./controllers/episodes')
const AuthController = require('./controllers/auth')

// Middleware
const { authenticated } = require('./middleware')


app.group('/api/v1', (router)=>{

    router.post('/login', AuthController.login)

    router.get('/webtoons',WebtoonsController.index)

    router.get('/webtoons/favourites/:favourite', authenticated, WebtoonsController.favourite)

    router.get('/webtoons/title/:title',WebtoonsController.title)

    router.get('/webtoons/:id/episodes',EpisodesController.index)

    router.get('/webtoons/:webtoon_id/episodes/:episode_id',EpisodesController.detail)

}),


app.listen(port, () => console.log(`Listening on port ${port}`))