import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const HomeCard = ({ user }) => {
    const router = useRouter();

    const handlePress = () => {
        router.push(`/person/${user._id}`);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={{ padding: 10, borderWidth: 1, borderRadius: 8, marginBottom: 10 }}>
            <View className="flex-row items-center justify-between flex-wrap">
                <Text className="font-outfit-bold text-2xl" numberOfLines={1}>
                    {user.username}
                </Text>
                <Text className="font-outfit-medium text-xl ml-4">
                    {user.role}
                </Text>
            </View>

            <Text className=' font-outfit text-xl'>{user.email}</Text>
        </TouchableOpacity>
    );
};

export default HomeCard;
