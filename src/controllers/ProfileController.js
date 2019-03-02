var mongoose = require('mongoose')
const Profile = mongoose.model('Profile')

module.exports = {
   async create(req, res){
      const profile = await Profile.create(req.body)
      res.redirect('/')
      return res.json(profile)
   },

   async read(req, res){
      const profile = await Profile.findById(req.params.id)
      return res.json(profile)
   },

   async all(req,res){
      const {page = 1} = req.query
      const profiles = await Profile.paginate({}, {page, limit: 10})
      res.render('perfis.ejs', {data: profiles.docs})
      return res.json(profiles.docs)
   },

   async update(req, res){
      const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
      return res.json(profile)
   },

   async delete(req, res){
      await Profile.findByIdAndDelete(req.params.id)
      return res.send()
   }
}