import React,{ useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(BlogContext);
    const id = navigation.getParam('id');

    const blogPost = state.find((blogPost) => blogPost.id === id);
    console.log('해당하는 값 출력 : ', blogPost);
    
    return (
        <Text>Edit Screen</Text>
    )
};

const st = StyleSheet.create({

});

export default EditScreen;