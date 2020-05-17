import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AuthForm from '../components/AuthForm';

const Signup = ({ navigation }) => {
    return (
        <View>
            <AuthForm />
        </View>
    )
};

const st = StyleSheet.create({

});

export default Signup;