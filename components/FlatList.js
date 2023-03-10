import { View, Text } from 'react-native'
import React from 'react'

const FlatList = () => {
 const [category, setCategory] = useState([
        {
            key: 1,
            title: "Pizza",
            name : "arif",
            img:require("./assets/food3.jpeg")
        },
        {
            key: 2,
            title: "Burger",
            name : "babar",
            img : require("./assets/food1.jpeg")
        },
        {
            key: 3,
            title: "shawarma",
            name : "shakeel",
            img : require("./assets/food2.jpeg")
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

export default FlatList