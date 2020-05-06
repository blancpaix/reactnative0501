import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetail = ( {result} ) => {
    // console.log('result : ', result);
    return (
        <View style={style.container} >
            <Image style={style.image} source={ {uri: result.image_url} }/>    
            {/* {} 한번 쓰면 object로 접근을 하니가 {{}} 이거 씀  ** very much like a view element a image is going to try to collapse itself unless we set some kine of fixed height or width to it */}
            <Text style={style.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
};

const style = StyleSheet.create({
    container : {
        marginLeft : 15
    },
    image: {
        width : 250,
        height : 120,
        borderRadius: 4
    },
    name : {
        fontWeight : 'bold',
        fontSize : 16
    }
});

export default ResultDetail;

 
