import React from 'react'
import { Text, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Info = () => {
  return (
    <View className="flex-row justify-center items-center gap-2 my-2 mx-auto">
        <View className="flex1 bg-white shadow items-center p-4 rounded-3xl">
                <Feather name="sunrise" size={24} color="black" />
                <Text className="text-lg text-purpleDark" >6:00</Text>
                <Text className="text-lg text-secondaryDark">Sunrise</Text>
        </View>

        <View className="flex1 bg-white shadow items-center p-4 rounded-3xl">
                <MaterialIcons name="water-drop" size={24} color="black" />
                <Text className="text-lg text-purpleDark" >84%</Text>
                <Text className="text-lg text-secondaryDark">Rain</Text>    


        </View>

        <View className="flex1 bg-white shadow items-center p-4 rounded-3xl">
            <Feather name="sunset" size={24} color="black" />
            <Text className="text-lg text-purpleDark" >5:00</Text>
            <Text className="text-lg text-secondaryDark">Sunset</Text>
        </View>
    </View>
  )
}

export default Info
