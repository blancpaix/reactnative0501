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
                title = "Component Demo" 
            />
            <Button
                onPress={() => navigation.navigate('List')}
                title = "List Demo" 
            />
            <Button
                onPress={() => navigation.navigate('Image')}
                title = "Image Demo" 
            />
            <Button
                onPress={() => navigation.navigate('Counter')}
                title = "Counter Demo"
            />
            <Button
                onPress={() => navigation.navigate('Color')}
                title = "Color Demo"
            />
            <Button
                onPress={() => navigation.navigate('Square')}
                title = "Square Demo"
            />
            <Button
                onPress={() => navigation.navigate('Text')}
                title = "Text Demo"
            />
            <Button
                onPress={() => navigation.navigate('Box')}
                title = "Box Demo"
            />

            {/* 이미지나 텍스트 눌렀을 때 반응에는 이게 좋을듯 */}
            <TouchableOpacity
                onPress={() => navigation.navigate('List')}>
                <Text>Go To 리스트 Demo</Text>
            </TouchableOpacity>
        </View>
    )
};

const st = StyleSheet.create({
    text: {
        fontSize : 30,
    }
});

export default HomeScreen;