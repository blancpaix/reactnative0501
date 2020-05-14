import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);
    const [title, setTitle]= useState('');
    const [content, setContent] = useState('');

    return (
        <View>
            <Text style={st.label} >Enter Title : </Text>
            <TextInput style={st.input} value={title} onChangeText={setTitle} />
            <Text style={st.label} >Enter Content : </Text>
            <TextInput style={st.input} value={content} onChangeText={setContent} />
            <Button 
                title="블로그 포스트 저장" 
                onPress={ async () => {
                    await addBlogPost(title, content);
                    await navigation.navigate('Index');
                }}
                // 여기서 navigation.navigate('Index') 하면 post 되기 이전에 페이지로 넘어가서 구데기임. 그래서 콜백 쓰세요 그러려면 컴포넌트 할당이 필수적인데?
                // 일단은 돌아가게 해놧는데 리스트 출력이 되는지 먼저 봐야지?
            />
        </View>
    )
};

// 초기값 설정하는건데 이거 잘되는건지 모르겟음.. 컴포넌트에서 사용하는 방식인데....;;
CreateScreen.defaultProps = {
    initialValues : {
        title : '',
        content : ''
    }
}

const st = StyleSheet.create({
    input : {
        fontSize : 18,
        borderWidth : 1,
        borderColor : 'black',
        marginBottom : 15,
        padding : 5,
        margin : 5,
    },
    label : {
        fontSize : 20,
        marginBottom : 5,
        marginLeft : 5
    }
});

export default CreateScreen;