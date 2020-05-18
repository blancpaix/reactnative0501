import React, { useContext } from 'react';
import { StyleSheet, Text, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';

import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation, locations }} = useContext(LocationContext);
    
    if (!currentLocation) {  // !currentLocation 값이 아직 들어오지 않았을 떄...를 말하는듯??
        return <ActivityIndicator size="large" style={{ marginTop : 200}} />;
    }

    return (
        <MapView style={st.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius = { 30 }
                strokeColor="rgba(158, 158, 255, 1.0)"
                fillColor="rgba(158, 158, 255, 0.3)"
            />
            <Polyline coordinates={locations.map(set => set.coords)} />
        </MapView>
    )
};

const st = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;