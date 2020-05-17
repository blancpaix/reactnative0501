const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type : String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', (next) => {  // 'save' 함수 훅
    const user = this;
    if(!user.isModified('password')) {  // 값이 변경되지 않으면 다음으로
        return next();
    }
    
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err)
            }
            user.password = hash;   // hash값 할당
            next();
        })
    })
});

userSchema.methods.comparePassword = candidatePassword => {
    const user = this;

    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
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