import React from 'react'
import { Image, Text, View } from 'react-native'

const Content = () => {
  return (
    <View className='items-center justify-center'>
        <Image source={require("../../assets/storm.png")} className='w-60  h-60' />

        <View className="relative">
                <Text className="text-[12rem]">26</Text>
                <Text className="absolute top-6 text-8xl right-[-20]">°</Text>
        </View>

        <Text className="text-secondaryDark text-3xl">ThunderStorm</Text>

    </View>

  )
}

export default Content
