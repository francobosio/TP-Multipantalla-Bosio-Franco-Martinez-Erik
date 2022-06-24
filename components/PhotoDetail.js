import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const PhotoDetail = ({title, imageUrl}) => {
  const styles = StyleSheet.create({
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    headerTextStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    thumbnailStyle: {
      height: 50,
      width: 50,
      borderRadius: 15,
      borderWidth: 1.5,
      borderColor: '#6897BB',
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
    },
    imageStyle: {
      height: 250,
      flex: 1,
      width: null,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: '#6897BB',

    },
    viewBorder: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#F0F8FF',
      borderRadius: 20,
      margin: 5,
    }
  });

  return (
    <View style={styles.viewBorder}>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{uri: imageUrl}} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image resizeMode='stretch' style={styles.imageStyle} source={{uri: imageUrl}} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(imageUrl)}>See Now!</Button>
      </CardSection>
    </View>
  );
};



export default PhotoDetail;
