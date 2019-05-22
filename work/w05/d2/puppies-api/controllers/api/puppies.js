const Puppy = require('../models/puppy');

module.exports = {
    getAllPuppies,
    getOnePuppy,
    createPuppy,
    deletePuppy
    
};

function deletePuppy(req, res) {
    Puppy.findByIdAndDelete(req.params.id)
    .then(function(pup) {
        res.status(200).json(pup);
    });
}

function getOnePuppy(req, res) {
    Puppy.findById(req.params.id).then(function(puppy) {
      res.status(200).json(puppy);
    });
  }
  
  function createPuppy(req, res) {
    Puppy.create(req.body).then(function(puppy) {
      res.status(201).json(puppy);
    });
  }
  
  function getAllPuppies(req, res) {
    Puppy.find({}).then(function(puppies) {
      res.status(200).json(puppies);
    });
  }

