const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(error => res.json({ message: error }));
});

router.post('/', (req, res) => {
  const { answers, result } = req.body;
  const post = new Post({
    userAnswers: answers,
    userResult: result
  });
  post.save()
    .then(data => res.json(data))
    .catch(error => res.json(error));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Post.findById(id)
    .then(post => res.json(post))
    .catch(error => res.json({ message: error }));
});

router.delete('/', (req, res) => {
  const { id } = req.body;
  Post.remove({ _id: id })
    .then(response => res.json(response))
    .catch(error => res.json({ message: error }));
});

router.patch('/', (req, res) => {
  const { newTitle, id } = req.body;

  Post.updateOne({ _id: id }, { $set: { title: newTitle } })
    .then(response => res.json(response))
    .catch(error => res.json({ message: error }));
});

module.exports = router;
