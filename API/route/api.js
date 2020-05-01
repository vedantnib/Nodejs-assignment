const express = require ('express');
const router = express.Router();
const Ninja = require('../models/movies');

// get movie name, image, summary
router.get('/movies', function(req, res, next){
	Ninja.find({}).then(function(movie){
		res.send(movie);
}); 
// add a new movie to the db
router.post('/movies', function(req, res, next){
    Ninja.create(req.body).then(function(movie){
        res.send(movie);
    }).catch(next);
});


module.exports = router;
