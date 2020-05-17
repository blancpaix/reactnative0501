const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;

    try {
        const user = new User({email, password});
        await user.save();
        const token = jwt.sign({ userId : user._id}, 'MY_SECRET_KEY');

        res.send({ token });
    } catch (err) {
        return res.status(422).send(err.message);
    }
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(422).send({err : '이메일이나 비밀번호 넣으쇼'});
    }
    
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(422).send({err : '계정이 없소.'})
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
        res.send({token});
    } catch (err) {
        return res.status(422).send({ err : '아이디나 패스워드 잘못넣었소'})
    }
});

module.exports = router;