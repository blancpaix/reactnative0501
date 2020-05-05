import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter ] = useState(0);
    // state 사용. import {useState}, 초기값 설정 = useState(0)
    // [변수, set변수] 한 묶음으로 사용
    // 참고 const [colorOne, colorTwo] = colors 이거 편해요.    colors.colorOne 이렇게 바로 접근하는거임
    return (
        <View>
            <Button title="Increase" 
            onPress={() => setCounter(counter +1)}  // 여기서 conter--; state.counter; 이런거 하지마세요 ㅄ임
            />
            <Button title="Decrease" onPress={() => setCounter(counter -1)} />
            <Text>Current Count : {counter}</Text>
        </View>
    )
};

const st = StyleSheet.create({

});

export default CounterScreen;