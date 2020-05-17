import React, { useContext } from 'react';
import { StyleSheet, Text, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';

import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation, locations }} = useContext(LocationContext);
    
    /*
    if (!currentLocation) {  // !currentLocation 값이 아직 들어오지 않았을 떄...를 말하는듯??
        return <ActivityIndicator size="large" style={{ marginTop : 200}} />;
    }
    */

    return (
        <MapView style={st.map}
            initialRegion={{
                latitude : 36.966867,
                longitude : 128.014573,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >       
        </MapView>
    )
};

const st = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;