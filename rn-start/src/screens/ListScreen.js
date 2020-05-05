import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
            // key : Unique, String 으로 인식
            { name : 'Frend #1', age : 20 },
            { name : 'Frend #2', age : 21 },
            { name : 'Frend #3', age : 22 },
            { name : 'Frend #4', age : 23 },
            { name : 'Frend #5', age : 24 },
            { name : 'Frend #6', age : 25 },
            { name : 'Frend #7', age : 26 },
            { name : 'Frend #8', age : 27 },
            { name : 'Frend #9', age : 28 }, 
    ];

    return (
        <FlatList 
            data={friends}                                  // 데이터
            keyExtractor={(friends) => friends.name}        // 키 값 부여
            showsHorizontalScrollIndicator = {false}        // 하단 스크롤바 생성 여부
            horizontal={true}                               // 가로방향 정렬
            // renderItem={(element) => {}}                 // element === { item : {name: 'Friends#1', index: 0}} + 추가적인 정보
            renderItem={({item}) => {                       // 배열에 대해 파악하고 있어야 함
                return <Text style={st.textStyle}>{item.name} - Age {item.age}</Text>
            }}
            
        />
    )
};

const st = StyleSheet.create({
    textStyle: {
        fontSize: 35,
        marginVertical : 20
    }
});

export default ListScreen;