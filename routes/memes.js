var express = require('express');
var router = express.Router();
var photoLinks = require('../public/data/memephotos');
var textLinks = require('../public/data/phototext');


router.get('/', function(request, response, next) {
    response.render('memes', { title: 'Meme-O-Matic 5000'})
});

router.get('/fetch', function(request, response, next) {
    response.send(photoLinks);
});

router.get('/fetchText', function(request, response, next) {
    response.send(textLinks);
});

module.exports = router;
