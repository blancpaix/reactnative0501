import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={st.link} >{text}</Text>
            </Spacer>
        </TouchableOpacity>
    )
};

const st = StyleSheet.create({
    link: {
        
    }
});

export default withNavigation(NavLink);