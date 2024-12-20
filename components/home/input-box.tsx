import React from 'react'
import { Text, TextInput, View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Theme } from '../../theme';

const InputBox = () => {
  return (
    <View style={{position:"relative"}}>
        <TextInput 
        placeholder='Type City Name'
        className='bg-white rounded-3xl shadow ps-4 mb-4 mt-5'
        style={{paddingLeft:32}}
        />

        <MaterialCommunityIcons 
        name="cloud-search-outline" 
        size={20} 
        color={Theme.secondaryDark}
        className=" top-4 left-4"
        style={{position:"absolute",marginTop:8,marginLeft:4}}
        />

    </View>
  )
}

export default InputBox
