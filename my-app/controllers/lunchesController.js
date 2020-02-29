const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.lunches
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).jspm(err))
    },

    create: function(req, res) {
        db.lunches
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}