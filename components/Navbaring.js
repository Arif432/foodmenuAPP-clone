import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput} from 'react-native';

import React from 'react'

const Navbaring = () => {
  return (
    <View className="m-4">
          <Image 
          className="w-8 h-8 rounded-2xl"
          source={require("../assets/food4.jpeg")} />

          <Text className="font-bold mt-2 mb-2 text-sm"> Hello Tajmal Shah</Text>
          <Text className="font-bold text-lg">Choose Your Favourite food</Text>
        
          <View className="flex-row mt-4">
            <TextInput placeholder='search favourite food' className="bg-white flex-1 mr-4 p-2 font-semibold rounded-sm"/>
            <Image source={require("../assets/favicon.png")}/>
          </View>
        
        </View>
  )
}

export default Navbaring
