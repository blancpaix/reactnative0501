import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, submitBtnText, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input label="이메일" value={email} 
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input label="비밀번호" value={pw}
                secureTextEntry
                onChangeText={setPw}
                autoCapitalize="none"
                autoCorrect={false}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : <Text> </Text>}
            <Spacer>
                <Button title={submitBtnText} onPress={() => onSubmit({ email, pw })} />
            </Spacer>
        </>
    )
};

const st = StyleSheet.create({
    
});

export default AuthForm;