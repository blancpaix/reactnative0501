import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
    const { state, getBlogPosts, deleteBlogPost } = useContext(BlogContext);

    useEffect(() => {
        getBlogPosts();

        // 화면 다시 돌아오면 다시 불러오기
        const listner = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {      // 더이상 렌더링 할 필요가 없으면(동일 구조 계속 사용) return 함수 호출. 메모리 누수 방지
            listner.remove();
        };
    }, []); // 한번만 실행 설정 [] 아니면 [function] function 을 실행할때 마다 실행 

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(key) => key.title}
                
                // 리스트 렌더링하는 방법은 이런식으로!
                renderItem={( { item } ) => {
                    return (
                        // Second arg 로 id 값을 넘겨서 navigation.getParam('id')로 값 받아내서 활용
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id})}>
                            <View style={st.row}>
                                <Text style={st.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name='trash' size={25} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

// 상단 + 아이콘 활성화
IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight : 
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
    }
}

const st = StyleSheet.create({
    row : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 12,
        paddingHorizontal : 10,
        borderTopWidth : 1,
        borderColor : 'gray'
    },
    title : {
        fontSize : 18
    },
    icon : {
        fontSize: 24
    }
});

export default IndexScreen;