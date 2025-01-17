
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
          
      <View className='px-8'>
            
          <Header />
          <InputBox />
          <Content />
          <Info />

          <Text className="text-sm mt-6 text-center text-secondaryDark">Demo Weather App-YWK</Text>
               
      </View>
              
      <StatusBar barStyle={"default"} />
         
      </ImageBackground>
  
   
   

    </SafeAreaView>

    
    
  )
}

