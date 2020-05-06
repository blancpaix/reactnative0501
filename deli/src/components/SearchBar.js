import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';   // FontAwesome 도 가능

const SearchBar = ( { term, onTermChange, onTermSubmit } ) => {
    return (
        <View style={styles.backgroundStyle} >
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                // onChangeText={newTerm => onTermChange(newTerm)}
                onChangeText={onTermChange}
                // onEndEditing={() => onTermSubmit() }     // 엔터 치면 이뤄지는거
                onEndEditing={onTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle : {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius : 5,
        marginHorizontal : 15,
        flexDirection : 'row',
        // alignItems: 'center',
        marginTop : 10,
        marginBottom : 10
    },
    inputStyle : {
        flex : 1,
        fontSize : 18
    },
    iconStyle: {
       fontSize : 35,
        alignSelf: 'center',
        marginHorizontal : 15
    }
});

export default SearchBar;