import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);         // 이미 기본으로 [] 들어있으니 이번에는 [] 안넣어줌
    const id = navigation.getParam('id');  // 공유한 arg의 id 값 가져옴 {id:item.id}
    // console.log(id);
    // console.log(result);
    
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        response.data;
        setResult(response.data);
    };
    useEffect(() => {   // api 요청 한번만 하게 만들어줌.
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{ uri : item}} />
                    // curly braces : one set is to designate that we're going to place a javascript exporession, second one is saying here's an actual object

                }}

                
            />
        </>
    )
};

const styles = StyleSheet.create({
    image: {
        height : 200,
        width : 300,
    }
});

export default ResultsShowScreen;