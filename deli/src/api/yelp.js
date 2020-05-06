import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization : 'Bearer zmLGHQjQdEVJmxyNDJBCpTFQZbrmUm4u1GDsui-qO65f-iQ2BapPlBUeu-a50oBP0MJBIy-ZSc9YRB9tBgv-XDVgcplOzRvECCKp8k4tGctJMY3nEcl8vhv_M9iuXnYx'
        // Bearer 다음 공백은 꼭 주세요
    }
});

// yelp.get('/search')  ==>  https://api.yelp.com/v3/businesses