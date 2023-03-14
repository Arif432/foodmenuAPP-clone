import React, { useState, useEffect } from 'react'
import { View,Text,FlatList } from 'react-native'
import getMovies from './components/GetMovies'
import MoviesList from './components/MoviesList';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const fetchedData = await getMovies();
      setData(fetchedData);
    }
    fetchDataAsync();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
        <MoviesList data={data} />
    </View>
  );
};

export default App;