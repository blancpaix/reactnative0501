import React from 'react';
import { View, Text, StyleSheet } from 'react-native' ;
import ImageDetail from '../components/ImageDetail';        // component prop 설정

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest"         // title 은 "" 로 가능
                imageSource={require('../../assets/forest.jpg')}
                score={9}
            />
            <ImageDetail title="Beach"         // title 은 "" 로 가능
                imageSource={require('../../assets/beach.jpg')}
                score={7}
            />
            <ImageDetail title="Mountain"         // title 은 "" 로 가능
                imageSource={require('../../assets/mountain.jpg')}
                score={6}
            />
        </View>
    )
};

const st = StyleSheet.create({});

export default ImageScreen;
