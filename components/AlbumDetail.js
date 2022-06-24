import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from './Button';

const AlbumDetail = ({navigation, title, albumId, description, countPhotos}) => {
  const styles = StyleSheet.create({
    headerContentStyle: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    headerTextStyle: {
      fontSize: 22,
      fontWeight: 'bold',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: 5,
      paddingBottom: 5,
    },
    descriptionTextStyle: {
      fontSize: 15,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: 5,
      paddingBottom: 5,
    },
    viewBorder: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#F0F8FF',
      borderRadius: 20,
      borderWidth: 1.5,
      borderColor: '#6897BB',
      margin: 5,
      padding: 5,
    }
  })

  return (
    <View style={styles.viewBorder}>
      <View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title.toUpperCase()}</Text>
          {description ? <Text style={styles.descriptionTextStyle}>{description}</Text> : null}
          <View>
            <Text style={{marginLeft: 8}}>Cantidad de Fotos: {countPhotos}</Text>
          </View>
        </View>
      </View>

      <View>
        <Button
          onPress={() => navigation.navigate('photoList', {albumId: albumId})}>
          See Now!
        </Button>
      </View>
    </View>
  );
};

export default AlbumDetail;
