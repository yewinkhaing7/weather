import React from 'react'
import { Image, Text, View } from 'react-native'

const Content = () => {
  return (
    <View className="justify-center items-center mb-6"  >
        <Image 
        source={require("../../assets/storm.png")} 
        className="w-32 h-32" />

        <Text className='text-[12rem] font-extrabold' style={{fontSize:32}}>26 °</Text>
        <Text className='text-4xl font-medium text-secondaryDark' >ThunderStorm</Text>
    </View>
  )
}

export default Content
