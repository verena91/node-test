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
  const postId = req.params.postId * 1;
  models.post.findById(postId).then(post => {
    res.json(post);
  });
});

routes.post('', function(req, res) {
  models.post.create(req.body)
  .then(post => {
    res.json(post); // TODO cambiar porque solo retorna ID
  });
});

routes.put('/:postId', function(req, res) {
  const postId = req.params.postId * 1;
  models.post.update(req.body, { where: { id : postId } })
  .then(rsp => {
    if (rsp === 1) {
      res.send(`Successfully updated post with ID: ${postId}`);
    } else {
      res.send(`Post with ID: ${postId} does not exist`);
    }
  });
});

routes.delete('/:postId', function(req, res) {
  const postId = req.params.postId * 1;
  models.post.destroy({ where: { id : postId } })
  .then(rsp => {
    if (rsp === 1) {
      res.send(`Successfully deleted post with ID: ${postId}`);
    } else {
      res.send(`Post with ID: ${postId} does not exist`);
    }
  });
});

module.exports = routes;
