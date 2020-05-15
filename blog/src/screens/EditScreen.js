import React,{ useState, useContext } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(BlogContext);
    const id = navigation.getParam('id');

    const blogPost = state.find((blogPost) => blogPost.id === id);
    console.log('해당하는 값 출력 : ', blogPost);

    return (
        // 값을 업데이트 못해줘서 여기서 initial value 가 적용이 되어야 하나?
        <View>
            <BlogPostForm 
                initialValue={{ title: blogPost.title, content : blogPost.content}}
                onEmit={(title, content) => {
                    editBlogPost(id, title, content, () => navigation.pop());
                }}
            />
        </View>
    )
};

const st = StyleSheet.create({

});

export default EditScreen;