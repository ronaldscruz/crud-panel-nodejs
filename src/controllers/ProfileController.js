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
      const profiles = await Profile.paginate({}, {page, limit: 4})
      return res.render('perfis.ejs', {data: profiles.docs, page: profiles.page, pages: profiles.pages})
   },

   async edit(req, res){
      const profile = await Profile.findById(req.params.id)
      return res.render('edit.ejs', {data: profile})
   },

   async update(req, res){
      await Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
      return res.redirect('/profiles')
   },

   async delete(req, res){
      await Profile.findByIdAndDelete(req.params.id)
      return res.redirect('/profiles')
   }
}