import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import yelp from '../api/yelp';
import { State } from 'react-native-gesture-handler';
import useResults from '../hooks/useResult';


// const SearchScreen = ({navigation}) => {
const SearchScreen = () => {
    // console.log(props);
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();    // hook 으로 빼낸거export 해서 가지고 옴

    // console.log(results);       // you can view jsonData of called yelp API
    
    const filterResultsByPrice = (price) => {
        // source === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }

    /*  go to hooks useResult.js
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
    */

    return (
        // <View> 이거 안쓸겨 <></> 이걸로 그냥 묶어버리는거 가능
        <>
            <SearchBar 
                term={term} 
                // onTermChange={newTerm => setTerm(newTerm)}
                onTermChange={setTerm}
                onTermSubmit={
                    // console.log('term was submitted!')
                    // searchApi
                    () => searchApi(term)
                }
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            {/* <Text> we have found {results.length} results </Text> */}
            <ScrollView >
                <ResultList results={filterResultsByPrice('$')} 
                    title="Cost Effective" 
                    // delete navigation={navigation}
                />
                <ResultList results={filterResultsByPrice('$$')} 
                    title="Bit Pricier" 
                    // delete navigation={navigation}
                />
                <ResultList results={filterResultsByPrice('$$$')} 
                    title="Big Spender"
                    // delete navigation={navigation}
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    
});

export default SearchScreen;