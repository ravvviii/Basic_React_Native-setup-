import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, StatusBar, Text, TextInput, View } from 'react-native';
import HomeCard from '../../components/HomeCard';
import { useAppStore } from '../../lib/store';

export default function HomeScreen() {
  const userData = useAppStore((state) => state.userData);
  const loading = useAppStore((state) => state.loading);
  const error = useAppStore((state) => state.error);
  const fetchUserData = useAppStore((state) => state.fetchUserData);

  const [searchText, setSearchText] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  useEffect(() => {
    if (userData) {
      if (searchText.trim() === '') {
        setFilteredUsers(userData);
      } else {
        const filtered = userData.filter((user: any) =>
          (user.username ?? '').toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredUsers(filtered);
      }
    }
  }, [searchText, userData]);

  return (
    <View
      className="flex-1 bg-gray-100"
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44, // safe padding for status bar
      }}
    >
      {/* Title */}
      <View className="px-6 pb-4  bg-army_green">
        <Text className=" text-army_medium text-3xl font-outfit-bold text-center py-4">
          Army Management System
        </Text>
      </View>

      {/* Search Bar */}
      <View className="mx-6 my-4 flex-row items-center bg-white rounded-full px-4 py-2 shadow-md">
        <Feather name="search" size={20} color="#888" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search by username..."
          value={searchText}
          onChangeText={setSearchText}
          className="flex-1 text-base"
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1 px-6 bg-white rounded-t-3xl"
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-2xl font-bold mb-4 mt-2 text-army_dark">
          All Personal Details
        </Text>

        {loading && <Text>Loading...</Text>}

        {error && <Text className="text-red-500">{error}</Text>}

        {!loading && !error && filteredUsers && filteredUsers.length > 0 ? (
          filteredUsers.map((user: any) => (
            <HomeCard key={user._id} user={user} />
          ))
        ) : (
          !loading && <Text className="text-gray-400">No record found.</Text>
        )}
      </ScrollView>
    </View>
  );
}
