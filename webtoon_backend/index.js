const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()

const port = 5000

app.use(bodyParser.json())

// Controllers

const AuthController = require('./controllers/auth')

app.group('/api/v1', (router)=>{

    router.post('/login', AuthController.login)

}),


app.listen(port, () => console.log(`Listening on port ${port}`))