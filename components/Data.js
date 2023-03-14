import React, { useState } from 'react';
import { StyleSheet, Text, View, SectionList, ScrollView, FlatList,Image } from 'react-native';
import shawarmaImg from "./assets/shawarma.jpg"

export default function App() {
  const [data, setData] = useState([
    {
      key: '0',
      title: 'Starters',
      data: [
        { key: '0', title: 'Salad' ,img: require('./assets/pasta.jpeg')},
        { key: '1', title: 'Soup',img: require('./assets/food2.jpeg') },
        { key: '2', title: 'Fish Cracker', img: require('./assets/food4.jpeg')},
      ],
    },
    {
      key: '1',
      title: 'Dessi Food',
      data: [
        { key: '0', title: 'Karahi', img: require('./assets/karahai.jpeg')},
        { key: '2', title: 'Kabab', img: require('./assets/kabab.jpeg')},
        { key: '1', title: 'Kabab', img: require('./assets/kabab.jpeg')},
      ],
    },
    {
      key: '2',
      title: 'Fast Food',
      data: [
        { key: '0', title: 'Burger',img: require('./assets/food2.jpeg')},
        { key: '1', title: 'Pizza', img: require('./assets/burger.jpeg')},
        { key: '2', title: 'Paasta' , img: require('./assets/pasta.jpeg')},
        { key: '3', title: 'Shawarma', img: require('./assets/shawarma.jpg')},
      ],
    },
    {
      key: '3',
      title: 'Drinks',
      data: [
        { key: '0', title: 'Coke', img: require('./assets/coke.jpg')},
        { key: '1', title: 'Fanta', img: require('./assets/fanta.jpg')},
        { key: '2', title: 'Mint' , img: require('./assets/mint.jpeg')},
        { key: '3', title: 'Sprite', img: require('./assets/sprite.jpg')},
      ],
    },
  ]);

  return (
    <View style={styles.container} className="mt-8">
      <FlatList
        data={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View className="m-2" style={{ marginRight: 20 }}>
            <Text className="font-bold" style={{ fontSize: 20 }}>{item.title}</Text>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {item.data.map((dish) => (
                <View
                className="flex-row mr-4"
                  key={dish.key}
                  style={{
                    height: 80,
                    width: 180,
                    backgroundColor: 'grey',
                    marginVertical: 10,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  
                  <Text style={{ fontSize: 16, color: 'white' }}>{dish.title}</Text>
                  <Image className="w-12 h-10 ml-2" source={dish.img}/>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});