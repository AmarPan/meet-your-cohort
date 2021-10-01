const mongoose = require('mongoose');

// Create your User Model

// need to have googleID on my userSchema

const profiles = [
    {id: 125223, name: 'Amar Pan', proj1: "https://amarpan.github.io/simon-game/",  proj1rm: "https://github.com/amarpan/simon-game" },
    {id: 127904, name: 'Alondra Guzman', proj1: "amarpan.github.io/simon-game/", proj1rm: "github.com/amarpan/simon-game"},
    {id: 139608, name: 'Shawn Park', proj1: "https://amarpan.github.io/simon-game/", proj1rm: "https://github.com/amarpan/simon-game"}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return profiles;
  }