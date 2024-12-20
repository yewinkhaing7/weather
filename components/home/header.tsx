import React from 'react'
import { Pressable, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { Theme } from '../../theme';

const Header = () => {
  return (
    <View className='flex-row justify-between items-center mt-5 mb-5'>
        <Pressable hitSlop={20}>

            <Link href={"/"} asChild>
                <Ionicons name="qr-code" size={28} color="black" />
            </Link>

        </Pressable>

        <View className='flex-row items-center'>
                <Ionicons name="location" size={24} color={Theme.orange} />
                <Text>Yangon</Text>

        </View>

        <Pressable hitSlop={20}>
            <Link href={"/"} asChild>
                <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </Link>

        </Pressable>

    </View>
  )
}

export default Header


