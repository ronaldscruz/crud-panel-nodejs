var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

const ProfileSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },

   gender: {
      type: String,
      required: true
   },

   birth: {
      type: String,
      required: true
   },

   friends: {
      type: Number,
      default: 0,
      required: true,
   },

   about: {
      type: String,
      required: false,
   },

   country: {
      type: String,
      required: true,
   },

   profileImg: {
      type: String,
      default: 'https://i.imgur.com/nvE9XUm.png',
      required: false
   }
})

ProfileSchema.plugin(mongoosePaginate)

mongoose.model('Profile', ProfileSchema)
