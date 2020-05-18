const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;   // 원래 A 대문자 인데 들어오면서 a 로 해석하기 때문에 소문자 쓰세요 꼭!
    // token Bearer 형식 사용할겨 이런식임, authorization === 'Bearer your_token_value'
    
    if (!authorization) {
        return res.status(401).send({error : '로그인부터 하셈'})
    }

    const token = authorization.replace('Bearer ', ''); // 인증 앞대가리 Bearer 제거
    jwt.verify(token, 'MY_SECRET_KEY', async(err, payload) => { // third arg : callback
        if (err) {
            return res.status(401).send({err : '로그인좀 하세요'});
        }

        const { userId } = payload;

        const user = await User.findById(userId);
        req.user = user;    // 미들웨어 이거를 타면 그 요청에는 req.user 에 값을 할당

        next();
    })
}