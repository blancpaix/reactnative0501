import React, {useState} from 'react';
import { Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ initialValue, onEmit}) => {
    const [title, setTitle] = useState(initialValue.title);
    const [content, setContent] = useState(initialValue.content);

    return (
        <>
            <Text style={st.label}> Set your post's title : </Text>
            <TextInput style={st.input} value={title} onChangeText={(title) => setTitle(title)} />
            <Text style={st.label}> Set your post's content : </Text>
            <TextInput style={st.input} value={content} onChangeText={setContent} />
            <Button style={st.button} title="블로그 포스트 저장"
                onPress={() => { onEmit(title,content) }}
            />
        </>
    )
};

// 초기값 설정
BlogPostForm.defaultProps = {
    initialValue : {
        title : '',
        content : ''
    }
};

const st = StyleSheet.create({
    input: {
        fontSize : 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom : 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    },
    button: {
        margin : 50
    }
});

export default BlogPostForm;