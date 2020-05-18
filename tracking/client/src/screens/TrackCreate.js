import '../_mockup';

import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';

import { Context as LocationContext } from '../context/LocationContext';

import useLocation from '../hooks/useLocation';

import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

const TrackCreate = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {addLocation(location, recording)}, [recording]);
        // Second arg : a list of dependencies or variables that i want to watch.
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3>경로 생성</Text>
            <Map />
            { err ? <Text>위치 추적 켜주세요 제발ㅠ {err}</Text> : <Text> </Text> }
            <TrackForm />
        </SafeAreaView>
    )
};

TrackCreate.navigationOptions = {
    title: '경로 생성'
};

const st = StyleSheet.create({

});

export default withNavigationFocus(TrackCreate);