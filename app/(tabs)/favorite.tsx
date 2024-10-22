import React from 'react';
import { ScrollView, Text, Image, useColorScheme } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DateHeader } from '@/components/DateHeader';
import { Colors } from '@/constants/Colors';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

export default function Collection() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ScrollView style={[{ backgroundColor: Colors[colorScheme].background }]}>
      <ThemedView>
        <DateHeader pageTitle="Favorites" />      
      </ThemedView>
    </ScrollView>
  )
}