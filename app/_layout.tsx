import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      {/* Hide header for the tabs group */}
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
      
      {/* Hide header for index if needed */}
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="person/[id]" 
        options={{ headerShown: false }} 
      />

      {/* Other screens will inherit default options */}
    </Stack>
  );
}
