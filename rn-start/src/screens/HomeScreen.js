import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// 네비게이션 사용하려면 param 으로 navigation 넣는데.. 어디서 넘어오는거임?..
// const HomeScreen = props => { console.log(props.navigation); <Button onPress={()=> props.navigate('Components')} /> } 로 쓰면 됨
const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text stlye={st.text}>Hi There!</Text>
            <Button
                onPress={() => navigation.navigate('Component')}
                title = "Go to 컴포넌트 Demo" 
            />
        </View>
    )
};

const st = StyleSheet.create({
    text: {
        fontSize : 30,
    }
});

export default HomeScreen;