import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { SafeAreaView } from 'react-navigation';

import { Context as TrackContext } from '../context/TrackContext';

const TrackDetail = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(set => set._id === _id);
    const initialCoords = track.locations[0].coords;
    // const list = track.locations.map(set => set.coords);

    return (
        <SafeAreaView forceInset={{ top: 'always'}} >
            <Text>{track.name}</Text>
            <MapView 
                style={st.map}
                initialRegion={{
                    ...initialCoords,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                }}
            />
            <Polyline coordinates={track.locations.map(set => set.coords)} />
        </SafeAreaView>
    )
};

const st = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackDetail;