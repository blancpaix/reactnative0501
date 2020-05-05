import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button title="Add a Color"
                onPress={() => {
                    setColors([ ...colors, randomRgb() ]);
                }}
            />
            <View style={{height:100, width:100, backgroundColor: randomRgb() }} />
            <FlatList 
                horizontal
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({item} ) => {     // {item} 은 그냥... 넘어오는 props 중 아무렇게 지정한거임 아님?
                    // {item} === `rgb(0,0,0)`
                    return <View style={{height:200, width:100, backgroundColor: item}} />
                    // 여긴 왜 이중으로 감싼거여?
                }}
            />
        </View>
    )
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red}, ${green}, ${blue})`
};

const st = StyleSheet.create({});

export default ColorScreen;