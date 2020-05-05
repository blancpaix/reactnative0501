import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput,  } from 'react-native-gesture-handler';

const TextScreen = () => {
    // 이거 연속적으로 설정이 불가능한듯.. '', '' 이런식으로... 이건 나중에 알아보기로
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');

    return (
        <View>
            <Text>Enter Name : </Text>
            <TextInput 
                style={st.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChagneText={(newValue) => setName(newValue)}
            />
            <Text>My Name is {name}</Text>

            <Text>Enter Password : </Text>
            <TextInput 
                type
                style={st.input}
                autoCapitalize={false}
                autoCorrect={false}
                value={pw}
                onChangeText={(e) => setPw(e)}
            />
            { true ? <Text>is that true? </Text> : null }
            { false ? <Text>is that true? </Text> : <Text>is that false? </Text>  }
            {pw.length < 4 ? <Text>Password Must Be more than 4 characters</Text> : null }
        </View>
    )
};

const st = StyleSheet.create({
    input: {
        margin : 15,
        borderColor : 'black',
        borderWidth: 3
    }
});

export default TextScreen;