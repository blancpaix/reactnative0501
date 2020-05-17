import '../_mockup';

import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

import { Context as LocationContext } from '../context/LocationContext';

import Map from '../components/Map';


const TrackCreate = () => {
    const { addLocation } = useContext(LocationContext);
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,   // option for accuracy
                timeInterval: 5000, // update per millisecond
                distanceInterval: 10    // update per meter
            }, (location) => {  // Second arg : invoke user location callback
                console.log(location);
            })
        } catch (error) {
            setErr(error);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);

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