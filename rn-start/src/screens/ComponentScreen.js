import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentScree = () => {
    const name = 'kim';
    const text = <Text>Helo to me!</Text>;      // 이렇게 넘길수도 있음

    return (
        <View>
            <Text stlye={st.textStyle} >Getting started with React Native</Text>
            <Text stlye={st.subHeaderStyle} >My name is {name}</Text>
            {text}
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