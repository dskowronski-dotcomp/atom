const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});
router.get('/kontakt', (req, res) => {
    res.render('contact');
});
router.get('/o-nas', (req, res) => {
    res.render('about-us');
});

router.get('/uslugi', (req, res) => {
    res.render('services');
});
router.get('/handel', (req, res) => {
    res.render('sales');
});

module.exports = router;