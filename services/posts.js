var models  = require('../models');
// var postsDelegate  = require('../../delegates/posts.js');
var express = require('express');

const routes = express.Router();

routes.get('', function(req, res) {
  models.post.findAll().then(posts => {
    res.json(posts);
  });
});

routes.get('/:postId', function(req, res) {
  const modelId = req.params.postId * 1;
  models.post.findById(modelId).then(post => {
    res.json(post);
  });
});

routes.post('', function(req, res) {
  console.log(req.body);
  models.post.create({ marca: req.body.marca, modelo: req.body.modelo })
  .then(() => models.post.findOrCreate({where: {marca: req.body.marca}, defaults: {modelo: req.body.modelo}}))
  .spread((post, created) => {
    console.log(post.get({
      plain: true
    }))
    console.log(created);
    res.json(post);
  })
});

routes.put('/:postId', function(req, res) {
  const modelId = req.params.postId * 1;
  models.post.update({ model: req.body.model }, { where: { id : modelId } })
  .then(post => {
    res.json(post); // TODO cambiar porque solo retorna ID
  });
});

routes.delete('/:postId', function(req, res) {
  const modelId = req.params.postId * 1;
  models.post.destroy({ where: { id : modelId } })
  .then(rsp => {
    res.json(rsp);
  });
});

module.exports = routes;
