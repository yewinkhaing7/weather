
import { ImageBackground, Platform, SafeAreaView, StatusBar, Text, View } from 'react-native';
import Header from '../components/home/header';

export default function Index() {
  return (
  
    <SafeAreaView style={{paddingTop:Platform.OS==="android"?24 :0}} >
      <ImageBackground 
        source={require("../assets/bg.jpg")}
        className="w-full h-full"
        blurRadius={6}
      >
          <View className='px-14'>
                <Header />
            </View>
      </ImageBackground>
  
   

    </SafeAreaView>

    
    
  )
}

