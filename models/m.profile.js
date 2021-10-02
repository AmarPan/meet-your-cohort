const mongoose = require('mongoose');

// Create your User Model

// need to have googleID on my userSchema

const profiles = [
    {id: 125223, name: 'Amar Pan', proj1: "https://github.com/amarpan/simon-game", pic:"" },
    {id: 127904, name: 'Alondra Guzman', proj1: "github.com/amarpan/simon-game", pic:""},
    {id: 139608, name: 'Shawn Park', proj1: "https://github.com/amarpan/simon-game", pic:""}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function getAll() {
    return profiles;
  }

  function getOne(id){
    return profiles.find(profile => profile.id === parseInt(id));
  }

  function create(profile) {
    profile.id = profile.id = Date.now() % 1000000
    profiles.push(profile);
  }

  function deleteOne(id){
    const idx = profiles.findIndex(profile => profile.id === parseInt(id));
    profiles.splice(idx, 1);
  }

  function update(id, profile){
    const idx = profiles.findIndex(profile => profile.id === parseInt(id));
    profile.id = parseInt(id);
    profiles.splice(idx, 1, profile);
  }