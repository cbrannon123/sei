var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/api/movies');
var performersCtrl = require('../controllers/api/performers');

router.get('/movies', moviesCtrl.getAllMovies);
router.get('/movies/:id', moviesCtrl.getOneMovie);
router.post('/movies', moviesCtrl.createMovie);
router.delete('/movies/:id', moviesCtrl.deleteMovie)
router.put('/movies/:id', moviesCtrl.updateMovie);

router.get('/performers', performersCtrl.getAllPerformers);
router.get('/performers/:id', performersCtrl.getOnePerformer);
router.post('/performers', performersCtrl.createPerformer);
router.delete('/performers/:id', performersCtrl.deletePerformer);
router.put('/performers/:id', performersCtrl.updatePerformer);




module.exports = router;