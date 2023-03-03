import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,FlatList ,Image ,ScrollView, TextInput } from 'react-native';
import Navbaring from "./components/Navbaring";
import CategoryCard from './components/CategoryCard';



export default function App() {

  const [category, setCategory] = useState([
        {
            key: 1,
            title: "Pizza",
        },
        {
            key: 2,
            title: "Burger",
        },
        {
            key: 3,
            title: "shawarma",
        }
    ])

  return (
    <ScrollView className="bg-slate-300">
      <View className="mt-10">
        <Navbaring />
      </View>

      <View className="m-4">
      <Text className="font-bold text-lg">Food category</Text>
      <FlatList 
      showsHorizontalScrollIndicator={false}
      horizontal
      data={category}
      keyExtractor={item => item.key}
      renderItem = {CategoryCard}

      />
      </View>

    </ScrollView>
  );
}

