const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Users
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    findById: function(req, res) {
        db.Users
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    create: function(req, res) {
        console.log("********test************");
        db.Users
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        db.Users
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}