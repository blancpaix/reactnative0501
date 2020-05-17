import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const Signin = () => {
    const { state, clearMessage, signin } = useContext(AuthContext);

    return (
        <SafeAreaView style={st.container} >
            <AuthForm 
                headerText="로그인"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitBtnText="로그인"
            />
            <NavLink 
                routeName="Signup"
                text="아이디가 없어? 회원가입하러 갈까?"
            />
        </SafeAreaView>
    )
};

Signin.navigationOptions = () => {
    return {
        headerShown : false
    }
};

const st = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center'
    }
});

export default Signin;