import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View>
            <View style={st.viewStyle}>
                <Text style={st.textOne}>Chile #1</Text>
                <Text style={st.textTwo}>Chile #2</Text>
                <Text style={st.textThree}>Chile #3</Text>
            </View>
            <View style={st.parentStyle} >
                <View style={st.viewOne} />
                <View style={st.viewTwoParent} >
                    <View style={st.viewTwo} />
                </View>
                <View style={st.viewThree} />
            </View>
        </View>
    )
};

const st = StyleSheet.create({
    viewStyle : {
        borderWidth: 3,
        borderColor : 'black',
        height : 100,
        alignItems : 'center',          // stretch 늘리고 중간 여백 상하 끝단 맞춤, center 늘리고 중간 여백 상하 여백, flex-end 상하 늘리고 하단 붙임//start 상단 붙임, baseline 잘모르겟...
        flexDirection : 'row',           // 종횡 설정 : 'column', 'row'
        justifyContent : 'space-between' // 여백 설정 : 'flex-start', 'flex-end', 'space-between' 'space-around', 'center' 가운데 모아버림
    },
    textOne : {
        borderWidth : 3,
        borderColor : 'red'
    },
    textTwo : {
        borderWidth : 3,
        borderColor : 'red',
        fontSize  : 15,
        // ...StyleSheet.absoluteFillObject // = position :'absolute', top:0, bottom:0, right:0, left:0
    },
    textThree : {
        borderWidth : 3,
        borderColor : 'red'
    },
    parentStyle : {
        backgroundColor :'yellow',
        borderWidth : 3,
        borderColor : 'black',
        height : 200,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    viewOne : {
        height : 50,
        width : 50,
        backgroundColor : 'red'
    },
    viewTwo : {
        height : 50,
        width : 50,
        backgroundColor : 'green'
    },
    viewTwoParent : {
        height : 100,
        justifyContent : 'flex-end',
        alignSelf : 'flex-end'      // 선택항목만 독자적으로 맞추는거임
    },
    viewThree : {
        height : 50,
        width : 50,
        backgroundColor : 'blue'
    }
});

export default BoxScreen;