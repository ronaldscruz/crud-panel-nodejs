var express = require('express')
var routes = express.Router()

const ProfileController = require('./controllers/ProfileController')

routes.get(['/', '/index'], (req, res) => {
   res.render('index.ejs')
})

routes.post('/profile/create/', ProfileController.create)
routes.get('/profile/view/:id', ProfileController.read)
routes.get('/profiles/', ProfileController.all)

routes.get('/profile/edit/:id', ProfileController.edit)
routes.put('/profile/update/:id', ProfileController.update)

routes.get('/profile/delete/:id', ProfileController.delete)

module.exports = routes