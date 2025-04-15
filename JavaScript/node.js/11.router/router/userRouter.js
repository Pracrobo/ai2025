const express = require('express');
const router = express.Router();


router.get('/profile', (req, res) => {
    res.send('유저 프로필');
});


router.get('/setting', (req, res) => {
    res.send('사용자 > 셋팅');
});

module.exports = router;