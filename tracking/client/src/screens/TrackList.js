import React, { useContext } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import { NavigationEvents, SafeAreaView } from 'react-navigation';

import { Context as TrackContext } from '../context/TrackContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TrackList = ({ navigation }) => {
    const { state, loadTracks } = useContext(TrackContext);
    
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3> Safe Area View 는 React-navigation 거여.</Text>
            <NavigationEvents onWillFocus={() => loadTracks()} />
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id})}>
                        <ListItem style={st.list} chevron={true} title={item.name} />
                    </TouchableOpacity>
                }}
                
            />
        </SafeAreaView>
    )
};

TrackList.navigationOptions = {
    title : "기록"
};

const st = StyleSheet.create({
    list: {
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    }
});

export default TrackList;