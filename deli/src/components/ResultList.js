import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
// very special function, gonna pass our component that has access to the navigation prop that it needs

import ResultDetail from './ResultDetail';

const ResultList = ({ title, results, navigation }) => {
    if (!results.length) {      // results.length = 0
        return null;            // don't render anything
    }

    return (
        <View style={stlyes.container}>
            <Text style={stlyes.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={( {item} ) => {
                    // return <Text>{item.name}</Text>
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('ResultsShow', { id : item.id })}>
                                {/* second arg : 네비게이션 스크린 간 공유할 객체 */}
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

const stlyes = StyleSheet.create({
    title: {
        fontSize : 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom : 5,
    },
    container : {
        marginBottom : 10
    }
});

export default withNavigation(ResultList);
// no longer export results directly!!