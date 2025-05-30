import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";


// SplashScreen.preventAutoHideAsync();
export default function Index() {
  const router = useRouter()


  const [fontsLoaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
  });

useEffect(() => {
  const prepare = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
  };
  prepare();
}, []);


  if (!fontsLoaded) {
    // Don't render anything; splash screen stays visible
    return null;
  }
  return (



    <View className="flex-1 bg-bc">

      <View className="flex-[0.6] justify-center items-center rounded-2xl">

        <Image
          source={require("../assets/images/India_flag.png")}
          className=" w-[250px] h-[400px] rounded-lg"
          resizeMode="contain"
        />
      </View>




      <View className="flex-[0.4] rounded-tr-2xl items-center px-4 -mt-8">
        <Text className="text-2xl font-bold py-2 font-outfit-medium">
          Welcome to </Text>
        <Text className=" text-army_bold font-bold text-4xl font-outfit-bold">INDIAN ARMY</Text>

        <Text className="text-xl px-3 py-2 text-center font-outfit-bold">
          Managment System
        </Text>

        {/* <TouchableOpacity
          className="bg-primary py-3 px-8 rounded-2xl mt-10"
          onPress={handleGoogleLogin}
        >
          <Text className="text-center text-white text-2xl font-outfit-medium">
            Login
          </Text>
        </TouchableOpacity> */}




        <TouchableOpacity
          className="flex-row items-center bg-army_medium rounded-full py-3 px-6 mt-5 border-2 border-army_medium"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 8,  // for Android shadow
          }}
          onPress={() => router.push('/(tabs)/home')}
        >
          <Text className="text-white font-outfit-bold text-2xl ">
            Enter
          </Text>
          {/* <Text className="text-white text-2xl"></Text> */}
        </TouchableOpacity>


        <Text className="font-outfit text-xs mt-10 pb-2 px-2 text-gray-500">
          A
          <Text className="font-outfit-bold text-xl text-red-600"> ravvviii </Text>
          product
        </Text>
      </View>
    </View>






  );
}
