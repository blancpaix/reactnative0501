import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: `https://7a4f6072.jp.ngrok.io`
});

instance.interceptors.request.use(
    async (config) => {    // req 에서 매 요청마다 토큰 값 집어넣어줌
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;