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
router.get('/handel/sswin', (req, res) => {
    res.render('sswin');
});
router.get('/handel/cctv', (req, res) => {
    res.render('cctv');
});
router.get('/handel/kd', (req, res) => {
    res.render('kd');
});
router.get('/handel/ssp', (req, res) => {
    res.render('ssp');
});
module.exports = router;