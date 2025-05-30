import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: '#2B411C',
    tabBarInactiveTintColor: 'gray',
  }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#2B411C',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="addDetails"
        
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
          title:"Add",
          tabBarActiveTintColor: '#2B411C',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#2B411C',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
