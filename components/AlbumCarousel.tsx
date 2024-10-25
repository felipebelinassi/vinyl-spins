import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Album {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
};

interface AlbumCarouselProps {
  albums?: Album[];
  title?: string;
}

const { width: windowWidth } = Dimensions.get('window');

export default function AlbumCarousel({ albums = [], title }: AlbumCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % albums.length);
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + albums.length) % albums.length);
  }

  if (albums.length === 0) return null;

  return (
    <>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          {albums.map((album, index) => {
            let position = (index - activeIndex + albums.length) % albums.length;
            const isCurrentAlbum = position === 0;
            const isNextAlbum = position === 1;
            const isPreviousAlbum = position === albums.length - 1;
        
            const albumCoverStyle = isCurrentAlbum ? styles.centerAlbum : 
              (isNextAlbum || isPreviousAlbum) ? styles.sideAlbum :
              styles.hiddenAlbum;

            return (
              <View
                key={album.id}
                style={[
                  albumCoverStyle,
                  styles.albumContainer,
                  styles.boxShadow,
                  {
                    transform: [
                      {
                        translateX: isCurrentAlbum ? 0 :
                          isNextAlbum ? windowWidth * 0.35 : 
                          -windowWidth * 0.35 
                      }
                    ],
                  },
                ]}
              >
                <Image
                  source={{ uri: album.coverUrl }}
                  style={[
                    isCurrentAlbum ? styles.centerAlbumCover : styles.sideAlbumCover
                  ]}
                  blurRadius={isNextAlbum || isPreviousAlbum ? 1 : 0}
                />
              </View>
            )
          })}
        </View>
        <TouchableOpacity style={[styles.navButton, styles.prevButton]} onPress={prevSlide}>
          <FontAwesome name='arrow-left'/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, styles.nextButton]} onPress={nextSlide}>
          <FontAwesome name='arrow-right'/>
        </TouchableOpacity>
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
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: windowWidth,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: "Inter_700Bold",
    color: "#46443E",
  },
  carouselContainer: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  hiddenAlbum: {
    display: 'none',
  },
  centerAlbum: {
    zIndex: 10,
    opacity: 1,
    shadowOpacity: 0.5,
  },
  centerAlbumCover: {
    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
  },
  sideAlbum: {
    zIndex: 5,
    opacity: 0.5,
  },
  sideAlbumCover: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
  },
  boxShadow: {
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,  
    elevation: 5
  },
  navButton: {
    zIndex: 22,
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
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#D0CCC8',
    marginHorizontal: 6,
    marginBottom: 35,
  },
  activeDot: {
    backgroundColor: '#7B7371',
  },
})