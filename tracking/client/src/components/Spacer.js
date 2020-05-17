import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
    return <View style={st.spacer}>{children}</View>
}

const st = StyleSheet.create({
    spacer : {
        margin : 15
    }
});

export default Spacer;