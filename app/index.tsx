
import { ImageBackground, Platform, SafeAreaView, StatusBar, Text, View } from 'react-native';
import Header from '../components/home/header';
import InputBox from '../components/home/input-box';
import Content from '../components/home/content';
import Info from '../components/home/info';

export default function Index() {
  return (
  
    <SafeAreaView style={{paddingTop:Platform.OS==="android"?24 :0}} >
     

      <ImageBackground 
        source={require("../assets/bg.jpg")}
        className="w-full h-full"
        blurRadius={6}
      > 
          <View className='px-2'>
                <Header />
                <InputBox />
                <Content />
                <Info  />
                <Text className="text-center text-secondaryDark text-sm my-3">Demo Weather App-CODE HUB</Text>
          </View>
              
      <StatusBar barStyle={"default"} />
         
      </ImageBackground>
  


        
    
   

    </SafeAreaView>

    
    
  )
}

