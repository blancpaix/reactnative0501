import createDataContext from './createDataContext';
import server from '../api/server';
import { AsyncStorage } from 'react-native';
// 여기서 navigation 을 못해서 navigationRef 를 사용함
import { navigate } from '../navigationRef';

const authReducer = (state, actions) => {
    switch(actions.type) {
        case 'clear_message':
            return { ...state, errorMessage: ''};
        case 'add_error':
            return { ...state, errorMessage: actions.payload };
        case 'signup':
            return { errorMessage: '', token: actions.payload };
        case 'signin':
            return { errorMessage: '', token: actions.payload };
        case 'signout':
            return { errorMessage: '', token: null };
        default:
            return state;
    }
};

const localSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token});
        navigate('TrackList');
    } else {
        navigate('loginFlow')
    }
}

const clearMessage = dispatch => () => {
    dispatch({ type: 'clear_message'});
}

const signup = dispatch => async ({ email, pw}) => {
    try { 
        const response = await server.post('/signup', {email, pw});
        await AsyncStorage.setItem('token', response.data.token);

        dispatch({ type: 'signup', payload: response.data.token});
        navigate('TrackList');
    } catch (err) {
        dispatch ({ type: 'add_error', payload: '회원가입 오류가 발생함???'});
    }
};

const signin = dispatch => async ({ email, pw }) => {
    try {
        const response = await server.post('/signin', {email, pw});
        await AsyncStorage.setItem('token', response.data.token);

        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        dispatch ({ type: 'add_error', payload: '로그인 오류가 발생함?요???'});
    }
};

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('loginFlow')
};



export const { Provider, Context } = createDataContext(
    authReducer,
    { localSignin, clearMessage, signup, signin, signout },     // functions
    { errorMessage: '', token: null }      // initial Values
)