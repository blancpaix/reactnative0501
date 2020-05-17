import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from './Spacer';

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>해더</Text>
            </Spacer>
            <Spacer>
                <Input label="이메일" value={email} 
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Input label="비밀번호" value={pw}
                    onChangeText={setPw}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Button title="전송" onPress={() => console.log('전송하기!!')}/>
            </Spacer>
        </>
    )
};

const st = StyleSheet.create({
    
});

export default AuthForm;