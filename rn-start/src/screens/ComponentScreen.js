import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentScree = () => {
    const name = 'kim';

    return (
        <View>
            <Text stlye={st.textStyle} >Getting started with React Native</Text>
            <Text stlye={st.subHeaderStyle} >My name is {name}</Text>
        </View>
    )
};

const st = StyleSheet.create({
    textStyle : {
        fontSize: 45
    },
    subHeaderStyle : {
        fontSize:  20
    }
});

export default ComponentScree;