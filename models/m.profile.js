const mongoose = require('mongoose');

//const Schema = mongoose.Schema;

// Create your User Model

// need to have googleID on my userSchema


const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nickname: String,
  email: String,
  phone: String,
  grpChat: Boolean,
  fb: String,
  li: String,
  gh: String,
  port: String,
  proj1: String,
  proj2: String,
  proj3: String,
  proj4: String,

  loc: String,
  tZone: ['PST','EST','CT','MT'],
  bPlace: String,
  eth: String,
  age: Number,
  bday: String,
  ed: String,
  work: String,
  
  likes: [String],
  dislikes: [String],
  googleID: String
}, {
  timestamps: true
});

// ceates a profiles (lowercase, plural) collection (bucket) in mongodb
module.exports = mongoose.model('Profile', profileSchema)


// const profiles = [
//     {id: 125223, name: 'Amar Panjwani', proj1: "https://github.com/amarpan/simon-game", pic:"" },
//     {id: 127904, name: 'Alondra Guzman', proj1: "github.com/amarpan/simon-game", pic:""},
//     {id: 139608, name: 'Shawn Park', proj1: "https://github.com/amarpan/simon-game", pic:""}
// ]

  
//   module.exports = {
//     getAll,
//     getOne,
//     create,
//     deleteOne,
//     update
//   };
  
//   function getAll() {
//     return profiles;
//   }

//   function getOne(id){
//     return profiles.find(profile => profile.id === parseInt(id));
//   }

//   function create(profile) {
//     profile.id = profile.id = Date.now() % 1000000
//     profiles.push(profile);
//   }

//   function deleteOne(id){
//     const idx = profiles.findIndex(profile => profile.id === parseInt(id));
//     profiles.splice(idx, 1);
//   }

//   function update(id, profile){
//     const idx = profiles.findIndex(profile => profile.id === parseInt(id));
//     profile.id = parseInt(id);
//     profiles.splice(idx, 1, profile);
//   }