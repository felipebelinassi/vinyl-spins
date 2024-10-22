import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from "@/components/ThemedText";

export function DateHeader({ pageTitle = "Title" }: { pageTitle?: string }) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <ThemedView style={styles.content}>
      <ThemedText type="subtitle">{currentDate.toUpperCase()}</ThemedText>
      <ThemedText type="title">{pageTitle}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 90,
    padding: 32,
    gap: 0,
    overflow: 'hidden',
  },
});
