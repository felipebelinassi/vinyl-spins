import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Album {
  id: number
  title: string
  artist: string
  coverUrl: string
}

interface AlbumCarouselProps {
  albums?: Album[]
  title?: string
}

const { width } = Dimensions.get('window')

export default function AlbumCarousel({ albums = [], title = "New Arrivals" }: AlbumCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % albums.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + albums.length) % albums.length)
  }

  if (albums.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.noAlbums}>No albums available.</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.carouselContainer}>
        {albums.map((album, index) => {
          let position = (index - activeIndex + albums.length) % albums.length
          return (
            <View
              key={album.id}
              style={[
                styles.albumContainer,
                {
                  transform: [{ translateX: position === 0 ? 0 : position === 1 ? width * 0.25 : -width * 0.25 }],
                  zIndex: position === 0 ? 10 : 5,
                  opacity: position === 0 ? 1 : 0.7,
                },
                position === 0 ? styles.centerAlbum : styles.sideAlbum,
                (position !== 0 && position !== 1 && position !== albums.length - 1) && styles.hiddenAlbum
              ]}
            >
              <Image
                source={{ uri: album.coverUrl }}
                style={[
                  styles.albumCover,
                  position === 0 ? styles.centerAlbumCover : styles.sideAlbumCover
                ]}
              />
            </View>
          )
        })}
        <TouchableOpacity style={[styles.navButton, styles.prevButton]} onPress={prevSlide}>
          <FontAwesome name='arrow-left'/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, styles.nextButton]} onPress={nextSlide}>
          <FontAwesome name='arrow-right'/>
        </TouchableOpacity>
      </View>
      <View style={styles.dotsContainer}>
        {albums.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex && styles.activeDot
            ]}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: width,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  noAlbums: {
    fontSize: 16,
    textAlign: 'center',
  },
  carouselContainer: {
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    // transition: '300ms ease-in-out',
  },
  centerAlbum: {
    zIndex: 10,
  },
  sideAlbum: {
    zIndex: 5,
  },
  hiddenAlbum: {
    display: 'none',
  },
  albumCover: {
    borderRadius: 8,
  },
  centerAlbumCover: {
    width: 256,
    height: 256,
  },
  sideAlbumCover: {
    width: 192,
    height: 192,
    opacity: 0.7,
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    marginTop: -20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
  },
  prevButton: {
    left: 10,
  },
  nextButton: {
    right: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
  },
})