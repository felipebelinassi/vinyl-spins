import { ScrollView, StyleSheet, useColorScheme } from 'react-native';
import AlbumCarousel from '@/components/AlbumCarousel';
import { ThemedView } from '@/components/ThemedView';
import { DateHeader } from '@/components/DateHeader';
import { Colors } from '@/constants/Colors';

const HomeScreen = () => {
  const colorScheme = useColorScheme() ?? 'light';
  
  const albums = [
    { id: 1, title: "Leviathan", artist: "Mastodon", coverUrl: "https://www.funkymooserecords.ca/cdn/shop/files/NjEtNzM0MS5qcGVn.jpg?v=1723826075" },
    { id: 2, title: "Album 2", artist: "Artist 2", coverUrl: "https://www.funkymooserecords.ca/cdn/shop/files/NjEtNzM0MS5qcGVn.jpg?v=1723826075" },
    { id: 3, title: "Album 3", artist: "Artist 3", coverUrl: "https://www.funkymooserecords.ca/cdn/shop/files/NjEtNzM0MS5qcGVn.jpg?v=1723826075" },
  ];

  return (
    <ScrollView style={[{ backgroundColor: Colors[colorScheme].background }]}>
      <DateHeader pageTitle="Home" />      
      <ThemedView style={styles.content}>
        <AlbumCarousel title="New arrivals" albums={albums}/>
        <AlbumCarousel title="It's been a while..." />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

export default HomeScreen;