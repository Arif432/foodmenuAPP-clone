import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'

const getMovies = async () => {
  try {
    const response = await fetch('https://reactnative.dev/movies.json');
    const data = await response.json();
    return data.movies;
  } catch (error) {
    console.error(error);
  }
};

export default getMovies