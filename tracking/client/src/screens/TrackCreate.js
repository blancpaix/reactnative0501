import '../_mockup';

import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';

import Map from '../components/Map';

const TrackCreate = () => {
    
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3>경로 생성</Text>
            <Map />
        </SafeAreaView>
    )
};

TrackCreate.navigationOptions = {
    title: '경로 생성'
};

const st = StyleSheet.create({

});

export default withNavigationFocus(TrackCreate);