import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization : 'Bearer pleasePutYourKey'
        // Bearer 다음 공백은 꼭 주세요
    }
});

// yelp.get('/search')  ==>  https://api.yelp.com/v3/businesses