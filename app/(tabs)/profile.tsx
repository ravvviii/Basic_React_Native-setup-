import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const profile = () => {
    const router = useRouter()
  return (
    <View className=' flex-1 justify-center items-center'>
      <Text>profile</Text>

      <TouchableOpacity
                className="flex-row items-center bg-army_medium rounded-full py-3 px-6 mt-5 border-2 border-army_medium"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 8,  // for Android shadow
                }}
                onPress={() => router.replace("/")}
              >
                <Text className="text-white font-outfit-bold text-2xl ">
                  Enter
                </Text>
                {/* <Text className="text-white text-2xl"></Text> */}
              </TouchableOpacity>
    </View>
  )
}

export default profile