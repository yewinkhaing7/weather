import React from 'react'
import { Text, TextInput, View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Theme } from '../../theme';

const InputBox = () => {
  return (
    <View className='relative'>
        <TextInput
         placeholder='City Name'
         className='p-4 ps-14 bg-white shadow rounded-2xl placeholder:font-bold placeholder:text-secondaryDark'   
        />

    <MaterialCommunityIcons 
    name="cloud-search-outline"
    size={24} 
    color={Theme.secondaryDark} 
    className='absolute top-2 left-4'
    />
    </View>
  )
}

export default InputBox
