import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Platform, StatusBar, Text, View } from 'react-native';
import { useAppStore } from '../../lib/store';

interface User {
  _id: string;
  username: string;
  email: string;
  role: string;
  // add other fields as needed
}

export default function PersonDetails() {
  const params = useLocalSearchParams();
  const id = params.id as string;
  const router = useRouter();

  const userData = useAppStore((state) => state.userData);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userData && id) {
      const foundUser = userData.find((u: User) => u._id === id);
      setUser(foundUser ?? null);
    }
  }, [userData, id]);

  if (!user) {
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading user details...</Text>
      </View>
    );
  }

  return (
    <View
      className="flex-1 bg-gray-100 p-5"
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44, // safe padding for status bar
      }}
    >
      <View className=' flex '>
        <Text className=' font-outfit-bold text-2xl'>Profile</Text>


        <View className='justify-center  mt-10'>

          <View className='flex-row justify-between w-full '>
            <Text className='font-outfit-bold text-4xl'>{user.username}</Text>
            <Text className='font-semibold text-3xl'>{user.role}</Text>
          </View>

          <Text className='font-outfit-bold mt-3'> {user.email}</Text>

        </View>

      </View>
    </View>
  );
}
