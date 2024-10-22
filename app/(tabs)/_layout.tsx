import React from 'react';
import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Tabs
      screenOptions={() => ({
        tabBarLabel: () => null,
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
        tabBarStyle: {
          height: 65,
          backgroundColor: Colors[colorScheme].tabBarBackground,
        },
        headerShown: false,
      })}
    >
      <Tabs.Screen
        name='index' 
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={38} color={color} />,
        }}
      />
      <Tabs.Screen
        name='collection' 
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="compact-disc" size={38} color={color} />,
        }}
      />
      <Tabs.Screen
        name='favorite' 
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="heart" size={38} color={color} />,
        }}
      />
    </Tabs>
  );
}
