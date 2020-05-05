import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ( {color, onIncrease, onDecrease} ) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
            <Button onPress={() => onDecrease()} title={`Increase ${color}`} />
        </View>
    )
};

const st = StyleSheet.create({});

export default ColorCounter;