import { useEffect, useState} from 'react';

import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);     // result might be BIG Array. so this state should be array type
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('Hi there!');
        try {
            // second param automaticall append on to this request like /search/?limit=50 +params
            const response = await yelp.get('/search', {
                params : {
                    Limit: 50,
                    term: searchTerm,
                    location : 'san jose'
                }
            });
            // .then() .catch()...  대신에 async await 씀
            setResults(response.data.businesses)
        } catch (err) {
            console.log(err); // console.error(err) 하면 에러 페이지로 넘어감
            setErrorMessage('Something went wrong!!!');
        }
    };
    
    // call searchApi when component is first rendered. BAD CODE!!!
    // searchApi('pasta');     // never going to just call a functiion directyle inside of our component
    // useEffect Hook
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};