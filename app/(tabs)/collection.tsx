import React from 'react';
import { ScrollView, useColorScheme } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { DateHeader } from '@/components/DateHeader';
import { Colors } from '@/constants/Colors';

export default function Collection() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ScrollView style={[{ backgroundColor: Colors[colorScheme].background }]}>
      <ThemedView>
        <DateHeader pageTitle="Collection" />      
      </ThemedView>
    </ScrollView>
  )
}