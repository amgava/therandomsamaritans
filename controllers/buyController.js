const db = require("../models");

// Defining methods for the postController
module.exports = {
  findAll: function(req, res) {
  console.log(req.params.id);
    db.Post
      .find({buyerId:req.params.id})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  /*findById: function(req, res) {
    console.log(req.params.id);
    db.Post
      .find({buyerId:req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  /*findByCatandLoc: function(req, res) {
    console.log(req.query);
    db.Post
    .findAll({category: req.query.category,location:req.query.location})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },*/
  /*findAll: function(req, res) {
    console.log(req.query);
    db.Post
      .find({category: req.query.category,location:req.query.location})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },*/
  create: function(req, res) {
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Post
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};