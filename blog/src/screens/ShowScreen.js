import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext);

    const blogPost = state.find((target) => target.id === navigation.getParam('id'));

    return (
        <>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </>
    )
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight :
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id : navigation.getParam('id')})}>
                <Text>수정하러 ㄱㄱ??</Text>
            </TouchableOpacity>
    }
}

const st = StyleSheet.create({

});

export default ShowScreen;