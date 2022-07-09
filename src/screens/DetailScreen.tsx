import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import FavStar from '../components/favStar.component';
import RenderCard from '../components/renderCard.component';
import { RootState } from '../redux/reducer';


export default function DetailScreen() {
  const { currentCharacter } = useSelector((state: RootState) => state.character);
  const path = `${currentCharacter!.thumbnail.path}.${currentCharacter!.thumbnail.extension}`;
  const { width, height } = Dimensions.get('screen');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
      flex: 1,
    },
    image: {
      width: width,
      height: height * 0.5,
    },
    descriptionContainer: {
      flex: 1,
      width: width,
      backgroundColor: 'white',
      zIndex: 99,
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      paddingTop: 20,
      paddingLeft: 20,
    },
    nameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    name: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
      flex: 5,
    },
    starContainer: {
      flex: 1,
    },
    label: {
      fontSize: 22,
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: 'black',
    },
    paragraph: {
      fontSize: 18,
      color: 'black',
    },
    cardContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 30
    },
    shadow: {
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 20,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 20,
    }
  });


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: path }} />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{currentCharacter?.name}</Text>
          <View style={styles.starContainer}>
            <FavStar id={currentCharacter!.id} />
          </View>
        </View>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.paragraph}>
          {
            currentCharacter?.description === ''
              ? 'Información no provista'
              : currentCharacter?.description
          }
        </Text>

        <View style={styles.cardContainer}>
          <RenderCard
            name="Comics"
            available={currentCharacter?.comics.available as number}
          />
          <RenderCard
            name="Series"
            available={currentCharacter?.series.available as number}
          />
          <RenderCard
            name="Stories"
            available={currentCharacter?.stories.available as number}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
