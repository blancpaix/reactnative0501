const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type : String,
        unique: true,
        required: true,
    },
    pw: {
        type: String,
        required: true
    }
});

// 내장함수 쓸때는 es6 arrow 잘 안먹힘... 알아두세용~
userSchema.pre('save', function (next) {  // 'save' 함수 훅
    const user = this;
    if(!user.isModified('pw')) {  // 값이 변경되지 않으면 다음으로 몽구스 함수임
        return next();
    }
    
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        
        bcrypt.hash(user.pw, salt, (err, hash) => {
            if (err) {
                return next(err)
            }
            user.pw = hash;   // hash값 할당
            next();
        })
    })
});

userSchema.methods.comparePassword = function (candidatePw) {
    const user = this;

    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePw, user.pw, (err, isMatch) => {
            if (err) {
                return reject(err);
            }
            if (!isMatch) {
                return reject(false);
            };

            resolve(true);
        })
    })
};

mongoose.model('User', userSchema);