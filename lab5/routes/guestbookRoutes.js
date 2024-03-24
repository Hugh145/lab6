const express = require('express');
const router = express.Router();
const controller = require('../controllers/guestbookControllers.js');

//router.get("/",function(req, res){
//    res.send('Hello and Welcome to the guestbook application controller');
//});

router.get("/", controller.landing_page);
router.get('/guestbook', controller.entries_list);
router.get('/guestbook-entries', controller.new_entry);
router.get('/about', controller.about_page);
router.get('/peter', controller.peters_entries);
//router.get('/about', function(req, res) {
//    res.redirect('/about.html');
//})

//not found response
router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
    })

//internal server error
router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
    })
// link to connection between the router
module.exports = router;