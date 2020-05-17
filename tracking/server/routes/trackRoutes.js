const express = require('express');
const mongoose = require('mongoose');

const requireAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = exporess.Router();

router.use(requireAuth);    // 이걸 쓰니까 req.user 에는 값이 항상 담겨있다!?? 그냥 모두 적용임 use 쓰면

router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({userId : req.user._id});   // _id 는 index 아님?

    res.send(tracks);
});

router.post('/tracks', async (req, res) => {
    const { name, locations } = req.body;

    if (!name || !locaitons ) {
        return res.status(422).send({ err : '명칭이나 위치 입력하세요'});
    };

    try {
        const track = new Track({ name, locations, userId: req.user._id });
        await track.save();
        
        res.send(track);
    } catch (err) {
        res.status(422).send({ err : err.message})
    }
});

module.exports = router;