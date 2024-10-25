import { ScrollView, StyleSheet, useColorScheme } from 'react-native';
import AlbumCarousel from '@/components/AlbumCarousel';
import { ThemedView } from '@/components/ThemedView';
import { DateHeader } from '@/components/DateHeader';
import { Colors } from '@/constants/Colors';

const HomeScreen = () => {
  const colorScheme = useColorScheme() ?? 'light';
  
  const albums = [
    { id: 1, title: "Leviathan", artist: "Mastodon", coverUrl: "https://www.funkymooserecords.ca/cdn/shop/files/NjEtNzM0MS5qcGVn.jpg?v=1723826075" },
    { id: 2, title: "Iowa", artist: "Slipknot", coverUrl: "https://i.discogs.com/VVxo_foJBeilQJSQswI3yLD7qMRjmJdpKxcYy4HpCWE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMTk5/ODI0LTE2NTIzNjQ0/NDktOTQ4Ni5qcGVn.jpeg" },
    { id: 3, title: "The Gentle Art of Making Enemies", artist: "Faith No More", coverUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyd8jkB4h7AFkLKGKnLgkagI5czPfZ65zvvQ&s" },
    { id: 4, title: "Slipknot", artist: "Slipknot", coverUrl: "https://i.discogs.com/AKrXlB-gy6gCfbWR3rVLHNtfS7kejvRJRN0sevamLNw/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzMDY1/NzgtMTMyNTAwNDQw/NC5qcGVn.jpeg" },
  ];

  return (
    <ScrollView style={[{ backgroundColor: Colors[colorScheme].background }]}>
      <DateHeader pageTitle="Home" />      
      <ThemedView style={styles.content}>
        <AlbumCarousel title="New arrivals" albums={albums}/>
        <AlbumCarousel title="It's been a while..." albums={albums}/>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 32,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default HomeScreen;