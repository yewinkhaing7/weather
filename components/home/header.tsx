import React from 'react'
import { Pressable, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Theme } from '../../theme';


const Header = () => {
  return (
    <View className='flex-row justify-between items-center mb-2'>

        <Pressable hitSlop={20}>
            <Link href={"/"} asChild>
                <Ionicons name="qr-code" size={24} color="black" />
            </Link>

        </Pressable>

            <View className='flex-row items-center gap-2'>
                <Ionicons name="location-outline" size={24} color={Theme.orange} />
                <Text className='text-2xl'>Yangon</Text>
            </View>

        <Pressable hitSlop={20}>
            <Link href={"/"} asChild>
                <FontAwesome5 name="ellipsis-v" size={24} color="black" />
            </Link>

        </Pressable>


    </View>
  )
}

export default Header
