import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import { Context as AuthContext } from '../context/AuthContext';

import Spacer from '../components/Spacer';

const Account = () => {
    const { signout } = useContext(AuthContext);

    return (
        // 상단 고정하려면 forceInset 을 써라!
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text>Account Screen</Text>
            <Spacer>
                <Button title="로그아웃" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    )
};

Account.navigationOptions = () => {
    return {
        title : "이건 뭐여",
        headerShown : true
    }
}

const st = StyleSheet.create({

});

export default Account;