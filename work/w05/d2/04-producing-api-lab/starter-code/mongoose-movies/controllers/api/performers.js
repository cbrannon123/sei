var Performers = require('../../models/performer');

module.exports = {
    getAllPerformers,
    getOnePerformer,
    createPerformer,
    deletePerformer,
    updatePerformer,
}

function updatePerformer(req, res) {
    Performers.findByIdAndUpdate(req.paramsd, req.body, {new: true})
    .then(function(performer) {
        res.status(200).json(performer);
    });
}

function deletePerformer(req, res) {
    Performers.findByIdAndDelete(req.params.id)
    .then(function(performer) {
        res.status(200).json(performer);
    });
}

function createPerformer(req, res) {
    Performers.create(req.body)
    .then(function(performer){
        res.status(201).json(performer);
    });
}

function getOnePerformer(req, res) {
    Performers.findById(req.params.id)
    .then(function(performer) {
        res.status(200).json(performer);
    });
}

function getAllPerformers(req, res) {
    Performers.find({})
    .then(function(performer) {
        res.status(200).json(performer);
    });
}
