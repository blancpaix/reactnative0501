import React,{ useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(BlogContext);
    const id = navigation.getParam('id');

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        // 값을 업데이트 못해줘서 여기서 initial value 가 적용이 되어야 하나?
        <>
            <BlogPostForm 
                initialValue={{ title: blogPost.title, content : blogPost.content}}
                onEmit={(title, content) => {
                    editBlogPost(id, title, content, () => navigation.pop());
                }}
            />
        </>
    )
};

const st = StyleSheet.create({

});

export default EditScreen;