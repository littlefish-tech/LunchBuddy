const db = require("../models");

module.exports = {
    findAll: function(req, res){
        console.log("###################")
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
        console.log("********Save************");
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
      },

    findOne: function(req, res) {
        db.Users
          .findOne(req.params.username)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
}