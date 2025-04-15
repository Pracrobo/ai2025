const express = require('express');
const router = express.Router();


router.get('/list', (req, res) => {
    res.send('유저 프로필');
});


router.get('/details', (req, res) => {
    res.send('상품 > 디테일');
});


router.get('/:id/details', (req, res) => {
    res.send('상품 > id > 디테일');
});


router.get('/coupons', (req, res) => {
    res.send('상품 > 쿠폰');
});

module.exports = router;