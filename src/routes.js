var express = require('express')
var routes = express.Router()

const ProfileController = require('./controllers/ProfileController')

routes.get(['/', '/index'], (req, res) => {
   res.render('../public/index.ejs')
})

routes.post('/profile/create/', ProfileController.create)
routes.get('/profile/view/:id', ProfileController.read)
routes.get('/profiles/', ProfileController.all)
routes.put('/profile/update/:id', ProfileController.update)
routes.delete('/profile/delete/:id', ProfileController.delete)

module.exports = routes